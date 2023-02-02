import React from 'react';
import PropTypes from 'prop-types';
import './singleRocket.css';
import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../Redux/Rockets/roketsSlice';

const SingleRocket = (props) => {
  const dispatch = useDispatch();
  const {
    name, description, img, id, reserved,
  } = props;
  return (
    <div className="rocket-section">
      <div className="rocket-info">
        <img className="rocket-image" src={img} alt="rocket" />
        <div className="rocket-detail">
          <h2 className="rocket-name">{name}</h2>
          <p className="rocket-summary">
            {reserved && <span className="reserved">Reserved</span>}
            {description}
          </p>
          {reserved ? (
            <button className="cancel-reservation" type="button" onClick={() => { dispatch(cancelReservation(id)); }}>Cancel Reservation</button>
          ) : (
            <button className="reserve-rocket" type="button" onClick={() => { dispatch(reserveRocket(id)); }}>
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

SingleRocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default SingleRocket;
