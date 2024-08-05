import { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import './ScheduleCalendar.css';
import { useScheduleDispatch } from '../../context/ScheduleContext';

const ScheduleCalendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const navigate = useNavigate();
  const { handleSetSchedule } = useScheduleDispatch();

  const changeDate = e => {
    const startDateFormat = moment(e[0]).format("YYYY/MM/DD");
    const endDateFormat = moment(e[1]).format("YYYY/MM/DD");
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  const goToSchedule = () => {
    if (startDate && endDate) {
      handleSetSchedule(startDate, endDate);
      navigate('/schedule');
    } else {
      alert('여행 시작일자와 마치는일자를 선택해주세요.');
    }
  };

  return (
      <div className='Home'>
        <Calendar
            onChange={changeDate}
            selectRange={true}
            formatDay={(locale, date) => moment(date).format("DD")}
            minDate={new Date()}
        />
        <div className='button-container'>
          <input type='button' value='이전' className='button button-prev' onClick={() => {}}/>
          <input type='button' value='다음' className='button button-next' onClick={goToSchedule}/>
        </div>
      </div>
  );
}

export default ScheduleCalendar;
