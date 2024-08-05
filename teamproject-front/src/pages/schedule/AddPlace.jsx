import PropTypes from 'prop-types';
import './AddPlace.css';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScheduleDispatch } from '../../context/ScheduleContext';

const AddPlace = ({ places }) => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');
  const { handleSelectPlace } = useScheduleDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { day, fromExpensePage } = location.state || {};

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 5);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectPlaceClick = (place) => {
    if (fromExpensePage) {
      // 비용 추가 페이지에서 호출된 경우
      navigate('/add-expense', { state: { selectedPlace: place.name, day } });
    } else {
      // 스케줄 페이지에서 호출된 경우
      handleSelectPlace(place, day);
      navigate('/schedule');
    }
  };

  const filteredPlaces = places.filter(place =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="add-place">
        <h2>인기 관광지</h2>
        <input
            type="text"
            placeholder="관광지/숙소/맛집 검색"
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
        />
        <ul>
          {filteredPlaces.slice(0, visibleCount).map((place, index) => (
              <li key={index} className="place-item">
                <img src={place.image} alt={place.name} className="place-image" />
                <div className="place-info">
                  <h3>{place.name}</h3>
                  <p>{place.type} · {place.location}</p>
                </div>
                <button className="select-button" onClick={() => handleSelectPlaceClick(place)}>선택</button>
              </li>
          ))}
        </ul>
        {visibleCount < filteredPlaces.length && (
            <button className="load-more" onClick={handleLoadMore}>더보기</button>
        )}
      </div>
  );
};

AddPlace.propTypes = {
  places: PropTypes.array.isRequired
};

export default AddPlace;
