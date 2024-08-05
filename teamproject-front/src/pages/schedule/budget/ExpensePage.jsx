import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ExpensePage.css';
import { useScheduleDispatch, useScheduleState } from '../../../context/ScheduleContext.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHotel, faPlane, faBus, faUtensils, faBasketShopping, faTicket, faEllipsis } from "@fortawesome/free-solid-svg-icons";

function ExpensePage() {
  const location = useLocation();
  const { date, startDate: locStartDate, endDate: locEndDate, selectedPlace, expense } = location.state || {};
  const { schedule } = useScheduleState();
  const { handleAddExpense, handleUpdateExpense } = useScheduleDispatch();
  const { startDate: contextStartDate, endDate: contextEndDate } = schedule;

  const startDate = locStartDate || contextStartDate;
  const endDate = locEndDate || contextEndDate;
  const nav = useNavigate();

  const [newExpense, setNewExpense] = useState({
    id: expense?.id || Date.now(),
    date: date || expense?.date || '',
    description: expense?.description || '',
    amount: expense?.amount || '',
    category: expense?.category || '',
    location: selectedPlace || expense?.location || '',
    paymentMethod: expense?.paymentMethod || '',
  });
  const [categoryError, setCategoryError] = useState(false);
  const isEditMode = !!expense;

  useEffect(() => {
    if (!startDate || !endDate) {
      console.log('No startDate or endDate found. Redirecting...');
      nav('/');
    }
  }, [startDate, endDate, nav]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExpense.category) {
      setCategoryError(true);
      return;
    }
    try {
      if (isEditMode) {
        handleUpdateExpense(newExpense);
        console.log('Expense updated successfully');
      } else {
        handleAddExpense(newExpense);
        console.log('Expense added successfully');
      }
      nav('/budget', { state: { startDate, endDate } });
    } catch (err) {
      console.log('Error adding/updating expense: ', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleCategoryClick = (category) => {
    setNewExpense((prevExpense) => ({
      ...prevExpense,
      category,
    }));
  };

  const handleSelectLocationClick = () => {
    nav('/add-place', { state: { date, startDate, endDate, fromExpensePage: true } });
  };

  const getDayString = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    return `${date.getMonth() + 1}.${date.getDate()}/${dayOfWeek}`;
  };

  const generateDaysArray = (start, end) => {
    const dateArray = [];
    let currentDate = new Date(start);
    currentDate.setHours(0, 0, 0, 0); // 시간을 0으로 설정
    const endDate = new Date(end);
    endDate.setHours(0, 0, 0, 0); // 시간을 0으로 설정

    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
  };

  const daysArray = generateDaysArray(startDate, endDate);

  return (
      <div className="expense-page-container">
        <button className="icon-btn" onClick={() => { nav("/budget") }}>
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="date-payment-container">
            <div className="form-group">
              <label htmlFor="date">날짜 선택</label>
              <select
                  id="date"
                  name="date"
                  value={newExpense.date}
                  onChange={handleInputChange}
                  required
              >
                <option value="여행 준비">여행 준비</option>
                {daysArray.map((date, index) => (
                    <option key={index} value={date.toISOString().split('T')[0]}>
                      Day {index + 1}: {getDayString(date)}
                    </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">결제 수단</label>
              <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={newExpense.paymentMethod}
                  onChange={handleInputChange}
                  required
              >
                <option value="현금">현금</option>
                <option value="카드">카드</option>
                <option value="이체">이체</option>
              </select>
            </div>
          </div>
          <div className="form-group category-group">
            <label>카테고리</label>
            <div className="category-icons">
              <button type="button" onClick={() => handleCategoryClick('숙소')} className={newExpense.category === '숙소' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faHotel} />
                <h6>숙소</h6>
              </button>
              <button type="button" onClick={() => handleCategoryClick('항공')} className={newExpense.category === '항공' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faPlane} />
                <h6>항공</h6>
              </button>
              <button type="button" onClick={() => handleCategoryClick('교통')} className={newExpense.category === '교통' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faBus} />
                <h6>교통</h6>
              </button>
              <button type="button" onClick={() => handleCategoryClick('식비')} className={newExpense.category === '식비' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faUtensils} />
                <h6>식비</h6>
              </button>
              <button type="button" onClick={() => handleCategoryClick('쇼핑')} className={newExpense.category === '쇼핑' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faBasketShopping} />
                <h6>쇼핑</h6>
              </button>
              <button type="button" onClick={() => handleCategoryClick('관광')} className={newExpense.category === '관광' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faTicket} />
                <h6>관광</h6>
              </button>
              <button type="button" onClick={() => handleCategoryClick('기타')} className={newExpense.category === '기타' ? 'selected' : ''}>
                <FontAwesomeIcon icon={faEllipsis} />
                <h6>기타</h6>
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">항목명</label>
            <input
                type="text"
                id="description"
                name="description"
                placeholder="항목명 및 내용을 입력해주세요."
                value={newExpense.description}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">금액 입력</label>
            <input
                type="number"
                id="amount"
                name="amount"
                placeholder="금액을 입력해주세요."
                value={newExpense.amount}
                onChange={handleInputChange}
                required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">장소 선택</label>
            <input
                type="text"
                id="location"
                name="location"
                placeholder="장소를 입력해주세요.(선택)"
                value={newExpense.location}
                onChange={handleInputChange}
                onClick={handleSelectLocationClick}
            />
          </div>
          <button type="submit" className="submit-btn">{isEditMode ? '수정' : '추가'}</button>
        </form>
      </div>
  );
}

export default ExpensePage;
