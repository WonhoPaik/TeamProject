import React from 'react';
import './RoomRegistrationForm.css';

const RoomRegistrationForm = () => {
    return (
        <div className="roomRegistrationForm">
            <h1>객실 정보 등록</h1>
            <form>
                <div className="formGroup">
                    <label htmlFor="hotelNo">호텔 코드</label>
                    <input id="hotelNo" name="hotelNo" type="number" placeholder="호텔 코드 입력" />
                </div>
                <div className="formGroup">
                    <label htmlFor="type">객실 타입</label>
                    <input id="type" name="type" type="text" placeholder="객실 타입 입력" />
                </div>
                <div className="formGroup">
                    <label htmlFor="price">객실 가격</label>
                    <input id="price" name="price" type="number" placeholder="객실 가격 입력" />
                </div>
                <div className="formGroup">
                    <label htmlFor="capacity">객실 인원</label>
                    <input id="capacity" name="capacity" type="number" placeholder="객실 인원 입력" />
                </div>
                <div className="formGroup">
                    <label htmlFor="totalRooms">객실 수</label>
                    <input id="totalRooms" name="totalRooms" type="number" placeholder="객실 수 입력" />
                </div>
                <div className="formGroup">
                    <label htmlFor="description">객실 설명</label>
                    <textarea id="description" name="description" rows="5" placeholder="객실 설명 입력"></textarea>
                </div>
                <div className="formGroup">
                    <label htmlFor="roomImage">객실 사진</label>
                    <input id="roomImage" name="roomImage" type="file" accept="image/*" />
                </div>
                <div className="btnSection">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

export default RoomRegistrationForm;
