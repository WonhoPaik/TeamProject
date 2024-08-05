import './HotelListItem.css';

const HotelListItem = ({no,name,description,thumbnail,price,tag})=>{
    return (
        <div className="hotelListItem">
            <div className="itemContainer">
                <input type="hidden" value={no}/>
                <div className="text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{tag}</p>
                </div>
                <div className="hotelImg">
                    <img src={thumbnail} alt="호텔이미지"/>
                </div>
            </div>
            <div className="itemContainer">
                <span>1박, 세금포함</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
}
export default HotelListItem;