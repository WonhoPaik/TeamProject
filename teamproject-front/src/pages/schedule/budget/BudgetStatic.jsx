import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './BudgetStatic.css';
import {useScheduleState} from '../../../context/ScheduleContext.jsx';
import MyResponsivePie
  from "../../../components/Schedule/ScheduleBudget/MyResponsivePie.jsx";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BudgetStatic = () => {
  const location = useLocation();
  const {title, startDate: locStartDate, endDate: locEndDate} = location.state
  || {};
  const {schedule, expenses} = useScheduleState();
  const {startDate: contextStartDate, endDate: contextEndDate} = schedule;

  const startDate = locStartDate || contextStartDate;
  const endDate = locEndDate || contextEndDate;

  const nav = useNavigate();

  const totalExpense = expenses.reduce(
      (acc, expense) => acc + parseInt(expense.amount, 10), 0);

  const categories = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = {amount: 0, percentage: 0};
    }
    acc[expense.category].amount += parseInt(expense.amount, 10);
    acc[expense.category].percentage = ((acc[expense.category].amount
        / totalExpense) * 100).toFixed(1);
    return acc;
  }, {});

  const highestSpendingCategory = Object.entries(categories).sort(
      (a, b) => b[1].amount - a[1].amount)[0];

  const formattedStartDate = new Date(startDate).toLocaleDateString('ko-KR',
      {year: 'numeric', month: 'numeric', day: 'numeric'});
  const formattedEndDate = new Date(endDate).toLocaleDateString('ko-KR',
      {month: 'numeric', day: 'numeric'});


  const pieChartData = Object.entries(categories).map(([category, data]) => ({
    id: category,
    label: category,
    value: data.amount,
    color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`
  }));


  return (
      <div className="budget-static-container">
        <FontAwesomeIcon className="icon" icon={faArrowLeft} onClick={() => nav('/budget',
                {state: {title, startDate, endDate}})}/>
        <h1>{`${formattedStartDate} - ${formattedEndDate}`}</h1>
        <h2>{title} 지출내역입니다.</h2>
        <div className="total-expense">
          <p>총 지출 금액</p>
          <p>{totalExpense.toLocaleString()}원</p>
        </div>
        {highestSpendingCategory && (
            <div className="highest-spending">
              <p>가장 많이 쓴 곳</p>
              <p><span className="category">{highestSpendingCategory[0]}</span>에서
                가장 많이 썼어요</p>
            </div>
        )}
        <div className="category-expenses">
          {Object.entries(categories).map(([category, data]) => (
              <div className="category-expense" key={category}>
                <span className="category-name">{category}</span>
                <span
                    className="category-amount">{data.amount.toLocaleString()}원</span>
                <span className="category-percentage">{data.percentage}%</span>
              </div>
          ))}
        </div>
        <div className="chart-container">
          <div className="chart-pie">
            <h3> </h3>
            <MyResponsivePie data={pieChartData}/>
          </div>
        </div>
      </div>
  );
};

export default BudgetStatic;
