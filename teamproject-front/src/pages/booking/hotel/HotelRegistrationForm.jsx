import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import "./HotelRegistrationForm.css";

const HotelRegistrationForm = () => {
    const [address, setAddress] = useState('');
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setAddress(fullAddress);
        setIsPostcodeOpen(false);
    };

    const handlePostcodeOpen = () => {
        setIsPostcodeOpen(true);
    };

    return (
        <div className="hotelRegistrationForm">
            <h1>호텔 정보 등록</h1>
            <form>
                <div className="formGroup">
                    <label htmlFor="businessNo">사업자 등록번호</label>
                    <input id="businessNo" name="businessNo" type="text" placeholder="사업자 등록번호 입력"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="name">호텔 이름</label>
                    <input id="name" name="name" type="text" placeholder="호텔 이름 입력"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="address">주소</label>
                    <input id="address" name="address" type="text" placeholder="호텔 주소 입력" value={address} readOnly />
                    <div className="btnSection address">
                        <button type="button" onClick={handlePostcodeOpen}>주소검색</button>
                    </div>
                    {isPostcodeOpen && (
                        <DaumPostcode
                            className="daumPostcode"
                            onComplete={handleComplete}
                            autoClose={false}
                            width={65}
                            height={400}
                            style={{ position: "absolute", zIndex: "100", border: "1px solid #000" }}
                        />
                    )}
                </div>
                <div className="formGroup">
                    <label htmlFor="tag">태그</label>
                    <input id="tag" name="tag" type="text" placeholder="검색 태그 입력"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="tel">전화번호</label>
                    <input id="tel" name="tel" type="tel" placeholder="전화번호 입력"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="description">호텔 상세정보</label>
                    <textarea id="description" name="description" rows="5" placeholder="호텔 설명 입력"></textarea>
                </div>
                <div className="formGroup">
                    <label htmlFor="hotelimg">호텔 대표사진</label>
                    <input id="hotelimg" name="hotelimg" type="file" accept="image/*"  />
                </div>
                <div className="btnSection">
                    <button type="submit">등록하기</button>
                </div>
            </form>
        </div>
    );
}

export default HotelRegistrationForm;
