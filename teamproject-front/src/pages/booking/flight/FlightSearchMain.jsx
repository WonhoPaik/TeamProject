import React from 'react';
import './FlightSearchMain.css';

const FlightSearchMain = () => {
    return (
        <div className="flightSearchMain">
            <h1>검색부터 발권까지 쉽고 빠른 항공 예약</h1>
            <div className="flightOptions">
                <button className="active">왕복</button>
                <button>편도</button>
                <button>다구간</button>
            </div>
            <div className="searchForm">
                <div className="formGroup">
                    <label htmlFor="departure">출발지</label>
                    <input id="departure" name="departure" type="text" placeholder="서울 SEL" />
                </div>
                <div className="formGroup">
                    <label htmlFor="destination">도착지</label>
                    <input id="destination" name="destination" type="text" placeholder="제주 CJU" />
                </div>
                <div className="formGroup">
                    <label htmlFor="dates">여행 날짜</label>
                    <input id="dates" name="dates" type="text" placeholder="8.4(일) - 8.7(수)" />
                </div>
                <div className="formGroup">
                    <label htmlFor="passengers">탑승객</label>
                    <input id="passengers" name="passengers" type="text" placeholder="탑승객 1명, 일반석 외 1" />
                </div>
                <div className="btnSection">
                    <button type="submit">항공권 검색</button>
                </div>
            </div>
        </div>
    );
}

export default FlightSearchMain;