// ChecklistModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ChecklistModal.css';

const SaveConfirmModal = ({ show, onClose, onConfirm }) => (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>저장되었습니다.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>닫기</Button>
        <Button variant="primary" onClick={onConfirm}>확인</Button>
      </Modal.Footer>
    </Modal>
);


const ChecklistModal = ({ show, handleClose, checklistItems, setChecklistItems }) => {
  const [newItem, setNewItem] = useState('');
  const [itemsWithCheckedState, setItemsWithCheckedState] = useState([]);
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);


  useEffect(() => {
    const savedChecklistItems = JSON.parse(localStorage.getItem('checklistItems')) || [];
    const savedCheckedState = JSON.parse(localStorage.getItem('checkedState')) || {};

    const initializedItems = savedChecklistItems.map(item => ({
      text: item,
      checked: savedCheckedState[item] || false,
    }));
    setItemsWithCheckedState(initializedItems);
  }, [show]);

  const handleAddItem = () => {
    if (newItem.trim()) {
      const updatedItems = [...itemsWithCheckedState, { text: newItem.trim(), checked: false }];
      setItemsWithCheckedState(updatedItems);
      setNewItem('');
    }
  };

  const handleCheckboxChange = (itemText) => {
    const updatedItems = itemsWithCheckedState.map(item =>
        item.text === itemText ? { ...item, checked: !item.checked } : item
    );
    setItemsWithCheckedState(updatedItems);
  };

  const handleDeleteItem = (itemText) => {
    const updatedItems = itemsWithCheckedState.filter(item => item.text !== itemText);
    setItemsWithCheckedState(updatedItems);
  };

  const handleSave = () => {
    const items = itemsWithCheckedState.map(item => item.text);
    const checkedState = itemsWithCheckedState.reduce((acc, item) => {
      acc[item.text] = item.checked;
      return acc;
    }, {});

    localStorage.setItem('checklistItems', JSON.stringify(items));
    localStorage.setItem('checkedState', JSON.stringify(checkedState));
    handleClose();
    setShowSaveConfirm(true);
  };
  const handleConfirm = () => {
    setShowSaveConfirm(false);
    handleClose();
  };
  return (
      <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>체크리스트 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="checklist">
            {itemsWithCheckedState.map((item, index) => (
                <li key={index}>
                  <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item.text)}
                  />
                  <span>{item.text}</span>
                  <button className="delete-button" onClick={() => handleDeleteItem(item.text)}>삭제</button>
                </li>
            ))}
          </ul>
          <div className="add-item">
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="새 항목 추가"
            />
            <Button variant="primary" onClick={handleAddItem}>
              추가
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            취소
          </Button>
          <Button variant="primary" onClick={handleSave}>
            저장
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

export default ChecklistModal;
