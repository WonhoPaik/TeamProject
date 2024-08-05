import "./HotelListMain.css";
import HotelListItem from "../../../components/booking/hotel/HotelListItem.jsx";
import CustomCalendarModal from "../../../components/booking/common/CustomCalendarModal.jsx";

const hotelList = [
    {
        no: 1,
        name: '랜딩관 제주신화월드 호텔앤리조트',
        description: '제주신화월드 내에서 가장 합리적인 가격으로 머무를 수 있는 리조트',
        thumbnail: '/src/assets/images/hotel.webp',
        price: '240,200원',
        tag: '호텔, 중문'
    },
    {
        no: 2,
        name: '랜딩관 제주신화월드 호텔앤리조트1',
        description: '제주신화월드 내에서 가장 합리적인 가격으로 머무를 수 있는 리조트',
        thumbnail: '/src/assets/images/hotel.webp',
        price: '240,200원',
        tag: '호텔, 중문'
    },
    {
        no: 3,
        name: '랜딩관 제주신화월드 호텔앤리조트2',
        description: '제주신화월드 내에서 가장 합리적인 가격으로 머무를 수 있는 리조트',
        thumbnail: '/src/assets/images/hotel.webp',
        price: '240,200원',
        tag: '호텔, 중문'
    },
];

const HotelListMain = () => {
    return (
        <div className="hotelListMain">
            <div className="hotelListMain_header">
                <div className="filterBar">
                    <CustomCalendarModal className="dateOption"/>
                    <button>필터</button>
                    <button>추천순</button>
                </div>
            </div>
            <div className="hotelList">
                {hotelList.map((item)=><HotelListItem key={item.id} {...item}/>)}
            </div>
        </div>
    );
}

export default HotelListMain;