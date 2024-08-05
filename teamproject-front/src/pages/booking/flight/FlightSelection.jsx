import React, { useState } from 'react';
import './FlightSelection.css';

const goingFlights = [
    {
        time: '17:40 - 18:55',
        route: 'GMP-CJU, 에어부산',
        price: '71,080원',
        seatsLeft: '9석 남음'
    },
    {
        time: '18:05 - 19:20',
        route: 'GMP-CJU, 에어부산',
        price: '71,080원',
        seatsLeft: '9석 남음'
    },
    {
        time: '17:20 - 18:30',
        route: 'GMP-CJU, 티웨이항공',
        price: '71,800원',
        seatsLeft: '9석 남음'
    }
];

const returnFlights = [
    {
        time: '08:05 - 09:15',
        route: 'CJU-GMP, 이스타항공',
        price: '52,900원',
        seatsLeft: '9석 남음'
    },
    {
        time: '08:35 - 09:45',
        route: 'CJU-GMP, 이스타항공',
        price: '52,900원',
        seatsLeft: '9석 남음'
    }
];

const FlightSelection = () => {
    const [selectedGoingFlight, setSelectedGoingFlight] = useState(null);
    const [selectedReturnFlight, setSelectedReturnFlight] = useState(null);

    const handleGoingFlightSelect = (flight) => {
        setSelectedGoingFlight(flight);
    };

    const handleReturnFlightSelect = (flight) => {
        setSelectedReturnFlight(flight);
    };

    const handleResetGoingFlight = () => {
        setSelectedGoingFlight(null);
    };

    const handleResetReturnFlight = () => {
        setSelectedReturnFlight(null);
    };

    return (
        <div className="flightSelectionMain">
            <div className="header">
                <h2>서울 - 제주</h2>
                <p>성인1, 일반석 외 1</p>
                <div className="filterOptions">
                    <button className="active">8.4(일) - 8.7(수) / 왕복</button>
                    <button>가격 낮은순</button>
                    <button>오는편 필터</button>
                </div>
            </div>
            {!selectedGoingFlight && (
                <div className="flightList">
                    <h3>가는편을 선택해주세요</h3>
                    {goingFlights.map((flight, index) => (
                        <div className="flightItem" key={index} onClick={() => handleGoingFlightSelect(flight)}>
                            <div className="flightDetails">
                                <p>{flight.time}</p>
                                <p>{flight.route}</p>
                            </div>
                            <div className="flightPrice">
                                <span>{flight.price}</span>
                                <span>{flight.seatsLeft}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {selectedGoingFlight && !selectedReturnFlight && (
                <div className="flightList">
                    <h3>오는편을 선택해주세요</h3>
                    {returnFlights.map((flight, index) => (
                        <div className="flightItem" key={index} onClick={() => handleReturnFlightSelect(flight)}>
                            <div className="flightDetails">
                                <p>{flight.time}</p>
                                <p>{flight.route}</p>
                            </div>
                            <div className="flightPrice">
                                <span>{flight.price}</span>
                                <span>{flight.seatsLeft}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="bookingSummary">
                <h3>선택한 항공편 정보</h3>
                {selectedGoingFlight && (
                    <div className="summaryItem">
                        <h4>가는편</h4>
                        <div className="flightDetails">
                            <p>{selectedGoingFlight.time}</p>
                            <p>{selectedGoingFlight.route}</p>
                        </div>
                        <div className="flightPrice">
                            <span>{selectedGoingFlight.price}</span>
                        </div>
                        <button className="resetButton" onClick={handleResetGoingFlight}>선택한 항공편 변경</button>
                    </div>
                )}
                {selectedReturnFlight && (
                    <div className="summaryItem">
                        <h4>오는편</h4>
                        <div className="flightDetails">
                            <p>{selectedReturnFlight.time}</p>
                            <p>{selectedReturnFlight.route}</p>
                        </div>
                        <div className="flightPrice">
                            <span>{selectedReturnFlight.price}</span>
                        </div>
                        <button className="resetButton" onClick={handleResetReturnFlight}>선택한 항공편 변경</button>
                    </div>
                )}
                {selectedGoingFlight && selectedReturnFlight && (
                    <div className="totalPrice">
                        <h4>1인, 최종 결제금액</h4>
                        <p>{parseInt(selectedGoingFlight.price.replace(/,/g, ''), 10) + parseInt(selectedReturnFlight.price.replace(/,/g, ''), 10)}원</p>
                    </div>
                )}
                <div className="btnSection">
                    <button className="bookButton">예약하기</button>
                </div>
            </div>
        </div>
    );
}

export default FlightSelection;
