import React, { useContext } from "react";

import { useScheduleState } from '../../context/ScheduleContext';
import ScheduleHeader from "../../components/schedule/ScheduleHeader.jsx";
import TravelPlan from "../../components/schedule/TravelPlan.jsx"; // 올바른 경로로 수정

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
