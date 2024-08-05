import React, {useState} from "react";
import Modal from "react-modal";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "./CustomCalendar.css";

// dayjs의 로케일을 한국어로 설정합니다.
dayjs.locale('ko');

const today = new Date();
const tomorrow = dayjs().add(1, 'day').toDate();

const CustomCalendarModal = ({className}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dateRange, setDateRange] = useState([today, tomorrow]);
    const [startDate, setStartDate] = useState(dayjs(today).format("MM.DD(ddd)"));
    const [endDate, setEndDate] = useState(dayjs(tomorrow).format("MM.DD(ddd)"));

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const changeDate = (e) => {
        if (e.length === 2) {
            const startDateFormat = dayjs(e[0]).format("MM.DD(ddd)");
            const endDateFormat = dayjs(e[1]).format("MM.DD(ddd)");

            setDateRange([e[0], e[1]]);
            setStartDate(startDateFormat);
            setEndDate(endDateFormat);
        } else {
            setDateRange([e[0], e[0]]);
            setStartDate(dayjs(e[0]).format("MM.DD(ddd)"));
            setEndDate(dayjs(e[0]).format("MM.DD(ddd)"));
        }
    };

    return (
        <>
            <button onClick={openModal} className={`calendarSelect-button ${className}`}>{startDate} - {endDate}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Calendar Modal"
                className="CalendarModal"
                overlayClassName="CalendarOverlay"
            >
                <button onClick={closeModal} className="close-button">X</button>
                <div className="date-display">
                    <div>Start Date: {startDate}</div>
                    <div>End Date: {endDate}</div>
                </div>
                <Calendar
                    onChange={changeDate}
                    selectRange={true}
                    value={dateRange}
                    formatDay={(locale, date) => dayjs(date).format("DD")}
                />
                <div className="booking-footer">
                    <button onClick={closeModal}>{startDate} - {endDate} / 선택완료</button>
                </div>
            </Modal>
        </>
    );
};

export default CustomCalendarModal;
