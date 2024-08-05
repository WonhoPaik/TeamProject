import React, { useState } from 'react';
import './MemoModal.css';
import { Modal, Button } from 'react-bootstrap';

const MemoModal = ({ show, handleClose, day }) => {
  const [memo, setMemo] = useState('');

  const handleSaveMemo = () => {
    handleClose(memo);
    setMemo('');
  };

  return (
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>메모 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <textarea
            className="memo-textarea"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="메모를 입력하세요."
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleSaveMemo}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default MemoModal;
