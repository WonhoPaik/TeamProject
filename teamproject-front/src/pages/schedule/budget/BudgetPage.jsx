import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './BudgetPage.css';
import {
  useScheduleDispatch,
  useScheduleState
} from '../../../context/ScheduleContext.jsx';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartPie,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const BudgetPage = () => {
  const {schedule, expenses} = useScheduleState();
  const {startDate: contextStartDate, endDate: contextEndDate} = schedule;

  const location = useLocation();
  const {title, startDate: locStartDate, endDate: locEndDate} = location.state || {};
  const startDate = locStartDate || contextStartDate;
  const endDate = locEndDate || contextEndDate;

  const [selectedDateRange, setSelectedDateRange] = useState('전체 기간');
  const nav = useNavigate();

  useEffect(() => {
    if (!startDate || !endDate) {
      console.log('No startDate or endDate found. Redirecting...');
      nav('/');
    }
  }, [startDate, endDate, nav]);

  const handleDateChange = (e) => {
    setSelectedDateRange(e.target.value);
  };

  const handleAddExpenseClick = (date) => {
    nav('/add-expense', { state: { date, startDate, endDate } });
  };

  const handleStaticClick = () => {
    nav('/budget-static', { state: { title, startDate, endDate } });
  };

  const handleEditExpenseClick = (expense) => {
    nav('/edit-expense', { state: { startDate, endDate, expense } });
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

  if (!startDate || !endDate) {
    return <div>Loading...</div>;
  }

  const daysArray = generateDaysArray(startDate, endDate);
  const filteredExpenses = selectedDateRange === '전체 기간'
      ? expenses
      : expenses.filter(expense => expense.date === selectedDateRange);

  return (
      <div className="budget-container">
        <div className="header">
          <button className="icon-btn" onClick={() => nav("/schedule")}><FontAwesomeIcon className="icon" icon={faArrowLeft} /></button>
          <h1>{title ? title : '제주여행'}</h1>
          <div className="header-icons">
            <button className="icon-btn" onClick={handleStaticClick}><FontAwesomeIcon className="icon" icon={faChartPie} /></button>
            <button className="icon-btn"><FontAwesomeIcon className="icon" icon={faTrashCan} /></button>
          </div>
        </div>
        <div className="date-select">
          <select value={selectedDateRange} onChange={handleDateChange}>
            <option value="전체 기간">전체 기간</option>
            <option value="여행 준비">여행 준비</option>
            {daysArray.map((date, index) => (
                <option key={index} value={date.toISOString().split('T')[0]}>
                  Day {index + 1}: {getDayString(date)}
                </option>
            ))}
          </select>
        </div>
        <div className="expense-list">
          {(selectedDateRange === '전체 기간' || selectedDateRange === '여행 준비') && (
              <div className="expense-category">
                <div className="budget-category">
                  <h2>여행준비</h2>
                  <button className="add-expense-btn" onClick={() => handleAddExpenseClick('여행 준비')}>비용 추가</button>
                </div>
                <div className="expense-item-list">
                  {filteredExpenses.filter(expense => expense.date === '여행 준비').map((expense, i) => (
                      <div key={i} className="expense-item" onClick={() => handleEditExpenseClick(expense)}>
                        <span className="category">{expense.category}</span>
                        <span className="description">{expense.description}</span>
                        <span className="amount">{expense.amount}원</span>
                        <span className="location">{expense.location}</span>
                      </div>
                  ))}
                </div>
              </div>
          )}
          {daysArray.map((date, index) => (
              (selectedDateRange === '전체 기간' || selectedDateRange === date.toISOString().split('T')[0]) && (
                  <div key={index} className="expense-day">
                    <div className="budget-category">
                      <h2>Day {index + 1}: {getDayString(date)}</h2>
                      <button className="add-expense-btn" onClick={() => handleAddExpenseClick(date.toISOString().split('T')[0])}>비용 추가</button>
                    </div>
                    <div className="expense-item-list">
                      {filteredExpenses.filter(expense => expense.date === date.toISOString().split('T')[0]).map((expense, i) => (
                          <div key={i} className="expense-item" onClick={() => handleEditExpenseClick(expense)}>
                            <span className="category">{expense.category}</span>
                            <span className="description">{expense.description}</span>
                            <span className="amount">{expense.amount}원</span>
                            <span className="location">{expense.location}</span>
                          </div>
                      ))}
                    </div>
                  </div>
              )
          ))}
        </div>
        <div className="total-expense">{filteredExpenses.reduce((acc, expense) => acc + parseInt(expense.amount, 10), 0)}원 지출</div>
      </div>
  );
}

export default BudgetPage;
