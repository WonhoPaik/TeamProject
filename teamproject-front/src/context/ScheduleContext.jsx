import React, { createContext, useState, useContext, useMemo } from 'react';

const ScheduleStateContext = createContext();
const ScheduleDispatchContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [schedule, setSchedule] = useState({ startDate: null, endDate: null });
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleSetSchedule = (startDate, endDate) => {
    setSchedule({ startDate, endDate });
  };

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses((prevExpenses) =>
        prevExpenses.map(expense => expense.id === updatedExpense.id ? updatedExpense : expense)
    );
  };

  const handleSelectPlace = (place, day) => {
    setSelectedPlaces(prevSelectedPlaces => [
      ...prevSelectedPlaces,
      { ...place, day }
    ]);
  };

  const handleDeletePlaces = (placeIds) => {
    setSelectedPlaces(prevSelectedPlaces =>
        prevSelectedPlaces.filter(place => !placeIds.includes(place.no))
    );
  };

  const stateValue = useMemo(() => ({ schedule, selectedPlaces, expenses }), [schedule, selectedPlaces, expenses]);
  const dispatchValue = useMemo(() => ({ handleSetSchedule, handleAddExpense, handleUpdateExpense, handleSelectPlace, handleDeletePlaces }), []);

  return (
      <ScheduleStateContext.Provider value={stateValue}>
        <ScheduleDispatchContext.Provider value={dispatchValue}>
          {children}
        </ScheduleDispatchContext.Provider>
      </ScheduleStateContext.Provider>
  );
};

export const useScheduleState = () => useContext(ScheduleStateContext);
export const useScheduleDispatch = () => useContext(ScheduleDispatchContext);
