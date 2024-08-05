import React, {useState} from 'react';
import './ScheduleHeader.css';
import EditModal from './EditModal';
import ChecklistModal from './ScheduleChecklist/ChecklistModal'; // 추가된 부분
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ScheduleHeader = ({ startDate, endDate }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showChecklistModal, setShowChecklistModal] = useState(false); // 추가된 부분
  const [title, setTitle] = useState('제주 여행');
  const nav = useNavigate();

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = (newTitle) => {
    setShowEditModal(false);
    if (newTitle) {
      setTitle(newTitle);
    }
  };

  const handleDeleteClick = () => {
    if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
      nav('/');
      alert('일정이 삭제되었습니다.');
    }
  };

  const handleBudgetClick = () => {
    nav('/budget', { state: { title, startDate, endDate } });
  };

  return (
      <div className="scheduleHeader">
        <h1>
          <div className="header-icon">
          <FontAwesomeIcon className="icon" icon={faArrowLeft} onClick={()=>{nav("/")}}/>
            <div className="header-title">
            {title}
            <button className="edit-button" onClick={handleEditClick}>✎</button>
            </div>
          </div>
          <button className="delete-button" onClick={handleDeleteClick}>삭제</button>
        </h1>
        <p className="date-range">{startDate} - {endDate}</p>
        <div className="buttons-left">
          <button className="group-button">+ 일행과 함께 일정짜기</button>
          <button className="group-button">% 셀프 패키지</button>
        </div>
        <div className="buttons-right">
          <button className="small-button">+ 항공편</button>
          <button className="small-button">+ 숙소</button>
          <button className="small-button" onClick={() => setShowChecklistModal(true)}>체크리스트</button>
          <button className="small-button" onClick={handleBudgetClick}>가계부</button>
        </div>
        <EditModal show={showEditModal} handleClose={handleCloseEditModal} />
        <ChecklistModal
            show={showChecklistModal}
            handleClose={() => setShowChecklistModal(false)}
        />
      </div>
  );
};

export default ScheduleHeader;
