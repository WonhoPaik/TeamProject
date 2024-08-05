import React, { useContext } from "react";
import ScheduleHeader from "../../components/Schedule/ScheduleHeader.jsx";
import TravelPlan from "../../components/Schedule/TravelPlan.jsx";
import { useScheduleState } from '../../context/ScheduleContext'; // 올바른 경로로 수정

const Schedule = () => {
  const { schedule, selectedPlaces } = useScheduleState();
  const { startDate, endDate } = schedule;

  return (
      <div>
        <ScheduleHeader startDate={startDate} endDate={endDate} />
        <TravelPlan startDate={startDate} endDate={endDate} selectedPlaces={selectedPlaces} />
      </div>
  );
};

export default Schedule;
