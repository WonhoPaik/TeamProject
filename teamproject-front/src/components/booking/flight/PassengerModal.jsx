import React from 'react';
import './PassengerModal.css';

const PassengerModal = ({ closeModal }) => {
    return (
        <div className="PassengerModal">
            <div className="modalContent">
                <h2>탑승객 정보 입력</h2>
                <div className="formGroup">
                    <label htmlFor="lastName">성</label>
                    <input id="lastName" name="lastName" type="text" placeholder="홍" />
                </div>
                <div className="formGroup">
                    <label htmlFor="firstName">이름</label>
                    <input id="firstName" name="firstName" type="text" placeholder="길동" />
                </div>
                <div className="formGroup">
                    <label htmlFor="birthDate">생년월일</label>
                    <input id="birthDate" name="birthDate" type="text" placeholder="YYYYMMDD" />
                </div>
                <div className="formGroup">
                    <label>성별</label>
                    <div className="genderOptions">
                        <input type="radio" name="gender" id="male" value="male" /> <label htmlFor="male">남자</label>
                        <input type="radio" name="gender" id="female" value="female" /> <label htmlFor="female">여자</label>
                    </div>
                </div>
                <div className="modalActions">
                    <button className="modalCloseButton" onClick={closeModal}>입력 완료</button>
                </div>
            </div>
        </div>
    );
}

export default PassengerModal;
