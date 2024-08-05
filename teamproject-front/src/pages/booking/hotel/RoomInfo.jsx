import './RoomInfo.css';

const RoomInfo = () => {
    const description = "ex 관리자가 직접입력\n싱글 침대 2개\n" +
        "2인 기준 최대 3인(성인 2인 + 만 12세 이하 어린이 1인)\n" +
        "침대 추가 불가\n" +
        "에어컨, TV, 냉장고, 커피포트, 금고, 생수\n" +
        "샤워가운, 샤워시설, 욕실용품, 드라이기\n" +
        "무료 Wi-fi";
    const bookingNotice = "[랜딩관 투숙객만을 위한 혜택]\n" +
        "신화테마파크 무료 입장 / BIG3 이용권 제공 (투숙기간 중 1회, 투숙객 전원 제공)\n" +
        "유아용품 무료 대여 (객실 예약 시 요청 필수, 한정 수량)\n" +
        "투숙객 무료 주차 및 전기차 급속/완속 충전 시설(유료) 이용 가능\n" +
        "제주신화월드 멤버십 ‘신화리워드’ 무료 회원가입 후 직영/참여 매장 내 결제 시 적립 및 할인 혜택\n" +
        "\n" +
        "[일회용품 무상 제공 중단 안내]\n" +
        "2024년 3월 29일부로 시행되는 관련 법규에 따라 일회용품(칫솔, 치약, 면도기 등)을 무료로 제공하지 않습니다.\n" +
        "환경 보호에 동참해 주셔서 감사합니다.\n" +
        "　\n" +
        "[추가 요금]\n" +
        "엑스트라베드 55,000원(1박), 디럭스 킹 룸타입만 추가 가능, 정원 이상 투숙 불가\n" +
        "13세 이상은 성인으로 간주됩니다. (미성년자 단독 투숙 불가)\n" +
        "슈페리어 타입, 디럭스 킹 성인 최대 투숙 인원은 2인, 디럭스 패밀리 트윈은 3인\n" +
        "　\n" +
        "[공지사항]\n" +
        "반려동물은 입실이 불가하며, 보조견만 가능합니다.\n" +
        "　\n" +
        "＊성수기: 4월 ~ 10월, 12월 23일 ~ 31일/ 비수기: 성수기 기간외"
    return (
        <>
            <div className="RoomInfo">
                <div className="nav_bar">
                    <button className="fallbackBtn"></button>
                </div>
                <div className="infoTop">
                    <div className="hotelImg">
                        <img src={('/src/assets/images/rooms/6319145ca63702.46972725.jpg')} alt=""/>
                    </div>
                    <div className="infoText">
                        <div className="type">슈페리어 트윈</div>
                        <div className="capacity">최대 2인</div>
                    </div>
                </div>
                <div className="priceSection">
                    <div className="text">무료취소</div>
                    <div className="priceInfo">
                        <div className="text">
                            1박, 세금포함
                        </div>
                        <div className="price">213,700원</div>
                    </div>
                </div>
                <div className="policySection">
                    <div className="subTitle">
                        체크인/체크아웃 시간
                    </div>
                    <div className="table-container">
                        <div className="title">체크인</div>
                        <div className="title">체크아웃</div>
                        <div className="checkin time"> 15:00</div>
                        <div className="checkout time"> 11:00 이전</div>
                    </div>
                    <div className="subTitle">
                        이용안내
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <div className="subTitle">
                        예약 공지
                    </div>
                    <div className="bookingNotice">
                        {bookingNotice}
                    </div>
                </div>
                <div className="btnSection">
                    <button>예약하기</button>
                </div>
            </div>
        </>
    );
}

export default RoomInfo;