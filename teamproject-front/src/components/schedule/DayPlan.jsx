import React, {useState} from 'react';
import './DayPlan.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useNavigate} from "react-router-dom";
import moment from "moment/moment.js";
import {useScheduleDispatch} from "../../context/ScheduleContext.jsx";
import {Button, Form, Modal} from 'react-bootstrap';
import MemoModal from "./MemoModal.jsx";

const DayPlan = ({ day, dayIndex, selectedPlaces }) => {
  const navigate = useNavigate();
  const { handleDeletePlaces } = useScheduleDispatch();
  const [showMemoModal, setShowMemoModal] = useState(false);
  const [showPlaceModal, setShowPlaceModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [memos, setMemos] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [selectedPlaceIds, setSelectedPlaceIds] = useState(new Set());
  const [selectedMemoIds, setSelectedMemoIds] = useState(new Set());
  const [placeMemo, setPlaceMemo] = useState('');
  const [memoTime, setMemoTime] = useState('');
  const [placeTime, setPlaceTime] = useState('');

  const handleAddPlaceClick = () => {
    navigate('/add-place', { state: { day } });
  };

  const handleAddMemoClick = () => {
    setShowMemoModal(true);
  };

  const handleCloseMemoModal = (newMemo) => {
    setShowMemoModal(false);
    if (newMemo) {
      setMemos([...memos, { id: Date.now(), text: newMemo, place: null, time: '' }]);
    }
  };

  const handlePlaceCheckboxChange = (no) => {
    setSelectedPlaceIds(prev => {
      const newSelectedPlaceIds = new Set(prev);
      if (newSelectedPlaceIds.has(no)) {
        newSelectedPlaceIds.delete(no);
      } else {
        newSelectedPlaceIds.add(no);
      }
      return newSelectedPlaceIds;
    });
  };

  const handleMemoCheckboxChange = (id) => {
    setSelectedMemoIds(prev => {
      const newSelectedMemoIds = new Set(prev);
      if (newSelectedMemoIds.has(id)) {
        newSelectedMemoIds.delete(id);
      } else {
        newSelectedMemoIds.add(id);
      }
      return newSelectedMemoIds;
    });
  };

  const handleDeleteSelectedItems = () => {
    if (selectedPlaceIds.size > 0) {
      handleDeletePlaces(Array.from(selectedPlaceIds));
      setSelectedPlaceIds(new Set());
    }

    if (selectedMemoIds.size > 0) {
      const filteredMemos = memos.filter(memo => !selectedMemoIds.has(memo.id));
      setMemos(filteredMemos);
      setSelectedMemoIds(new Set());
    }
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setPlaceTime(place.time || '');
    setPlaceMemo(place.memo || '');
    setShowPlaceModal(true);
  };

  const handleMemoClick = (memo) => {
    setSelectedMemo(memo);
    setMemoTime(memo.time || '');
    setShowTimeModal(true);
  };

  const handleMemoSubmit = () => {
    if (selectedPlace) {
      const newMemos = [...memos, { id: Date.now(), place: selectedPlace, text: placeMemo, time: placeTime }];
      setMemos(newMemos);
      setPlaceMemo('');
      setPlaceTime('');
      setShowPlaceModal(false);
    }
  };

  const handleMemoTimeSubmit = () => {
    if (selectedMemo) {
      const updatedMemos = memos.map(memo => memo.id === selectedMemo.id ? { ...memo, time: memoTime } : memo);
      setMemos(updatedMemos);
      setMemoTime('');
      setShowTimeModal(false);
    }
  };

  const handleDeleteMemoTime = () => {
    if (selectedMemo) {
      const updatedMemos = memos.map(memo => memo.id === selectedMemo.id ? { ...memo, time: '' } : memo);
      setMemos(updatedMemos);
      setShowTimeModal(false);
    }
  };

  const handleDeletePlaceMemoTime = () => {
    if (selectedPlace) {
      const updatedMemos = memos.filter(memo => !(memo.place && memo.place.no === selectedPlace.no));
      setMemos(updatedMemos);
      setPlaceMemo('');
      setPlaceTime('');
      setShowPlaceModal(false);
    }
  };

  const handleAddExpenseClick = () => {
    if (selectedPlace) {
      navigate('/add-expense', { state: { place: selectedPlace.name, date: day } });
    }
  };

  return (
      <div className="day-plan">
        <h2>{`Day ${dayIndex}: ${moment(day).format("MM/DD")}`}</h2>
        {selectedPlaces.map((sp) => (
            <div key={sp.no} className="selected-place-info">
              <input
                  type="checkbox"
                  checked={selectedPlaceIds.has(sp.no)}
                  onChange={() => handlePlaceCheckboxChange(sp.no)}
              />
              <div className="location" onClick={() => handlePlaceClick(sp)}><span>{sp.name} - {sp.type} · {sp.location}</span></div>
              {memos.filter(memo => memo.place && memo.place.no === sp.no).map((memo, i) => (
                  <div key={i} className="place-memo">
                    <span className="small-text">{memo.text}</span>
                    {memo.time && <span className="small-text"> - {memo.time}</span>}
                  </div>
              ))}
            </div>
        ))}
          {memos.filter(memo => !memo.place).map((memo) => (
              <div key={memo.id} className="memo">
                <input
                    type="checkbox"
                    checked={selectedMemoIds.has(memo.id)}
                    onChange={() => handleMemoCheckboxChange(memo.id)}
                />
                <div className="memoDetail" onClick={() => handleMemoClick(memo)}>
                  <span>{memo.text}</span>
                  {memo.time && <span className="small-text"> - {memo.time}</span>}
                </div>
              </div>
          ))}

        <div className="buttons">
          <button onClick={handleAddPlaceClick} className="dayplan">장소추가</button>
          <button onClick={handleAddMemoClick} className="dayplan">메모추가</button>
          <button onClick={handleDeleteSelectedItems} className="dayplan" disabled={!(selectedPlaceIds.size || selectedMemoIds.size)}>선택한 항목 삭제</button>
        </div>
        <MemoModal show={showMemoModal} handleClose={handleCloseMemoModal} day={day} />

        <Modal show={showPlaceModal} onHide={() => setShowPlaceModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlace ? selectedPlace.name : '메모 추가'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="placeMemo">
                <Form.Label>메모</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={placeMemo}
                    onChange={(e) => setPlaceMemo(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="placeTime">
                <Form.Label>시간</Form.Label>
                <Form.Control
                    type="time"
                    value={placeTime}
                    onChange={(e) => setPlaceTime(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPlaceModal(false)}>
              취소
            </Button>
            <Button variant="danger" onClick={handleDeletePlaceMemoTime}>
              메모 및 시간 삭제
            </Button>
            <Button variant="primary" onClick={handleMemoSubmit}>
              저장
            </Button>
            <Button variant="success" onClick={handleAddExpenseClick}>
              비용 추가
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showTimeModal} onHide={() => setShowTimeModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>메모 시간 추가</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="memoTime">
                <Form.Label>시간</Form.Label>
                <Form.Control
                    type="time"
                    value={memoTime}
                    onChange={(e) => setMemoTime(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowTimeModal(false)}>
              취소
            </Button>
            <Button variant="danger" onClick={handleDeleteMemoTime}>
              시간 삭제
            </Button>
            <Button variant="primary" onClick={handleMemoTimeSubmit}>
              저장
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  );
};

export default DayPlan;
