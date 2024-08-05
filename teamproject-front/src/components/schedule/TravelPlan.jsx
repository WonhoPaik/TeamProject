import React from 'react';
import DayPlan from './DayPlan.jsx';
import './TravelPlan.css';
import moment from "moment";
import MapToggleButton from "./MapToggleButton.jsx";

const TravelPlan = ({ startDate, endDate, selectedPlaces }) => {

  const getDaysArray = (start, end) => {
    const days = [];
    let currentDate = moment(start);
    const stopDate = moment(end);

    while (currentDate <= stopDate) {
      days.push(moment(currentDate).format("YYYY/MM/DD"));
      currentDate = moment(currentDate).add(1, 'days');
    }

    return days;
  };

  const daysArray = getDaysArray(startDate, endDate);

  return (
      <div className="travel-plan">
        <MapToggleButton/>
        <div className="day-plans">
          {daysArray.map((day, index) => (
              <DayPlan
                  key={day}
                  day={day}
                  dayIndex={index + 1}
                  selectedPlaces={selectedPlaces.filter(place => place.day === day)}
              />
          ))}
        </div>
      </div>
  );
};

export default TravelPlan;
