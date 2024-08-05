import "./HotelRoomLIst.css";

const HotelRoomLIst = () => {
    return (
        <>
            <div className="HotelRoomLIst">
                <div className="hotelRoomList">
                    <div className="roomListHeader">
                        <div className="title">
                            <div className="text">객실목록</div>
                            <div>1박, 세금포함</div>
                        </div>
                    </div>
                    <div className="roomItem">
                        <div className="roomSection">
                            <div className="roomInfo">
                                <div className="type">스탠다드 트윈</div>
                                <div className="capacity">최대 2인</div>
                            </div>
                            <div className="roomImg">
                                <img src={('/src/assets/images/rooms/6319145ca63702.46972725.jpg')} alt="객실이미지"/>
                            </div>
                        </div>
                        <div className="priceSection">
                            <div className="text">무료취소</div>
                            <div className="priceInfo">
                                <div className="price">109,700원</div>
                                <button>선택</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelRoomLIst;