import React, {useEffect, useRef, useState} from 'react';
import './EditModal.css';
import { Modal, Button } from 'react-bootstrap';
const SaveConfirmModal = ({ show, onClose, onConfirm }) => (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>수정되었습니다.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>닫기</Button>
        <Button variant="primary" onClick={onConfirm}>확인</Button>
      </Modal.Footer>
    </Modal>
);
const EditModal = ({ show, handleClose }) => {
  const [newTitle, setNewTitle] = useState('');
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);
  const inputRef = useRef();
  const handleSave = () => {
    const finalTitle = newTitle.trim() !== "" ? newTitle : "제주 여행";
    handleClose(finalTitle);
    setNewTitle('');
    setShowSaveConfirm(true);
  };
  const handleConfirm = () => {
    setShowSaveConfirm(false);
    handleClose();
  };
  useEffect(() => {
    if (show) {
      inputRef.current.focus();
    }
  }, [show]);

  return (
      <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>제목 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="제주 여행"
              className="edit-input"
              ref={inputRef}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSave}>
            수정
          </Button>
        </Modal.Footer>
      </Modal>
  <SaveConfirmModal
      show={showSaveConfirm}
      onClose={() => setShowSaveConfirm(false)}
      onConfirm={handleConfirm}
  />
  </>
  );
};

export default EditModal;
