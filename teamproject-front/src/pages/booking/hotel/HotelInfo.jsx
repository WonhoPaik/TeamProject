import './HotelInfo.css'
import HotelRoomLIst from "../../../components/booking/hotel/HotelRoomLIst.jsx";

const HotelInfo = () => {
    return (
        <>
            <div className="HotelInfo">
                <div className="nav_bar">
                    <button className="fallbackBtn"></button>
                </div>
                <div className="infoTop">
                    <div className="hotelImg">
                        <img src={('/src/assets/images/hotelimg.webp')} alt=""/>
                    </div>
                    <div className="infoText">
                        <div className="tag">호텔</div>
                        <div className="name">호텔이름</div>
                        <div className="address">주소</div>
                    </div>
                    <div className="buttonSection">
                        <button className="saveBtn">저장하기</button>
                        <button className="scheduleBtn">일정추가</button>
                        <button className="reviewBtn">리뷰쓰기</button>
                        <button className="shareBtn">공유하기</button>
                    </div>
                </div>
                <hr/>
                <div className="bookingSection">
                    <div className="bookingSectionHeader">
                        <div className="title">
                            최저가 예약
                        </div>
                        <div className="bookingOption">
                            <button>8.3(토) - 8.4(일)</button>
                            <button>성인 2</button>
                        </div>
                        <div className="priceSection">
                            <div className="">1박, 세금포함</div>
                            <div className="price"> 242,800원 🚩</div>
                        </div>
                    </div>
                    <hr/>
                    <HotelRoomLIst/>
                </div>
                <hr/>
                <div className="infoMiddle">
                    <div className="description">
                        호텔상세설명 에디터 이용해서 관리자가 입력
                    </div>
                </div>
                <hr/>
                <div className="infoBottom">
                    <div className="subTitle">기본정보</div>
                    <div className="hotelMap iframe16To9">
                        <iframe className="iframeContainer iframe16To9"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.615090735829!2d126.47899637553535!3d33.485370673375705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb0c3e0b2ea1%3A0xde4af154befac551!2z6re4656c65OcIO2VmOyWj-2KuCDsoJzso7w!5e0!3m2!1sko!2skr!4v1721888095786!5m2!1sko!2skr"
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="subText">
                        <div className="address">
                            <span>주소</span>
                        </div>
                        <div className="tel">
                            <span>전화</span>
                        </div>
                    </div>
                    <div className="subTitle">숙소정책</div>
                    <div className="hotelPolicy">
                        <div className="title">
                            체크인
                        </div>
                        <div className="title">
                            체크아웃
                        </div>
                        <div className="time">
                            14:00 - 자정
                        </div>
                        <div className="time">
                            11:00 이전
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotelInfo;