import React, { useState } from 'react';
import './FlightBookingForm.css';
import PassengerModal from '../../../components/booking/flight/PassengerModal.jsx';

const FlightBookingForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="FlightBookingForm">
            <h1>김포-제주 항공편</h1>
            <div className="bookingSummary">
                <div className="summaryItem">
                    <div className="itemLabel">날짜</div>
                    <div className="itemValue">2024.8.4 - 2024.8.7</div>
                </div>
                <div className="summaryItem">
                    <div className="itemLabel">여객</div>
                    <div className="itemValue">성인 1</div>
                </div>
                <div className="summaryItem">
                    <div className="itemLabel">항공사</div>
                    <div className="itemValue">에어부산, 이스타항공</div>
                </div>
                <div className="summaryItem">
                    <div className="itemLabel">최종 결제금액</div>
                    <div className="itemValue">123,980원</div>
                </div>
            </div>
            <div className="passengerInfo">
                <h2>예약자 정보</h2>
                <div className="formGroup">
                    <label htmlFor="name">이름</label>
                    <input id="name" name="name" type="text" placeholder="실명, 한글로 입력" />
                </div>
                <div className="formGroup">
                    <label htmlFor="phone">휴대전화번호</label>
                    <input id="phone" name="phone" type="tel" placeholder="010-1234-5678" />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">이메일</label>
                    <input id="email" name="email" type="email" placeholder="ID@triple.com" />
                </div>
            </div>
            <div className="passengerDetails">
                <h2>탑승객 정보</h2>
                <button className="openModalButton" onClick={openModal}>탑승객 정보 입력하기</button>
            </div>
            <div className="btnSection">
                <button className="payButton">결제정보 입력하기</button>
            </div>
            {isModalOpen && <PassengerModal closeModal={closeModal} />}
        </div>
    );
}

export default FlightBookingForm;
