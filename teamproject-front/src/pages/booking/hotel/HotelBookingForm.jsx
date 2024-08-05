import "./HotelBookingForm.css";

const HotelBookingForm = () => {
    return (
        <>
            <div className="HotelBookingForm">
                <div className="HotelBookingHeader">
                    <h2>랜딩관 제주신화월드 호텔앤리조트</h2>
                    <div className="tag">
                        제주
                    </div>
                    <div className="RoomImg">
                        <img src={('/src/assets/images/rooms/6319145ca63702.46972725.jpg')} alt="객실이미지"/>
                    </div>
                    <div className="bookingDate">
                        <div className="checkin">
                            <div className="text">체크인</div>
                            <div className="date">8.3(토)</div>
                            <div className="time">15:00 - 자정</div>
                        </div>
                        <div className="stayDate">1박</div>
                        <div className="checkOut">
                            <div className="text">체크아웃</div>
                            <div className="date">8.4(일)</div>
                            <div className="time">11:00</div>
                        </div>
                    </div>
                    <div className="bookingRoomInfo">
                        <div className="roomType">
                            슈페리어 트윈
                        </div>
                        <div className="guestCount">
                            <div className="text">투숙인원</div>
                            <div className="guestCountInfo">성인 2인</div>
                        </div>
                        <div className="standardCount">
                            <div className="text">요금 기준인원</div>
                            <div className="standardCountInfo">성인 2인</div>
                        </div>
                    </div>
                </div>
                <form className="bookingMemberForm" method="POST" target="#">
                    <div className="memberInfo">
                        <h2>예약자 정보</h2>
                        <label htmlFor="name">
                            한글명
                        </label>
                        <input id="name" name="name" type="text" placeholder="실명, 한글로 입력"/>
                        <label htmlFor="phone">
                            휴대전화번호
                        </label>
                        <input id="phone" name="phone" type="text" placeholder="휴대전화번호 입력"/>
                        <label htmlFor="email">
                            이메일
                        </label>
                        <input id="email" name="email" type="email" placeholder="ID@abc.com"/>
                    </div>
                    <div className="priceInfo">
                        <h2>결제 내역 안내</h2>
                        <div className="bookingPrice">
                            <div className="Text">예약 금액(세금 포함)</div>
                            <div className="Price">219.900원</div>
                        </div>
                        <div className="usePoint">
                            <label htmlFor="point">적립금 사용</label>
                            <input type="number" id="point" name="point" min="0" max="5000" step="500"/>
                        </div>
                        <div className="totalPrice">
                            <div className="text">총 결제금액</div>
                            <div className="price">214,900원</div>
                        </div>
                        <div className="savePointInfo">
                            <div className="text">예약완료시 적립금</div>
                            <div className="savePoint">2,199원</div>
                        </div>
                    </div>
                    <div className="btnSection">
                        <button type="submit">예약하기</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default HotelBookingForm;