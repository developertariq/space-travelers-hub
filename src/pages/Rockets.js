import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRocket from '../components/singleRocket';
import { fetchRockets } from '../Redux/Rockets/roketsSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const reRender = useRef(true);

  useEffect(() => {
    if (reRender.current) {
      if (rockets.length === 0) {
        dispatch(fetchRockets());
        reRender.current = false;
      }
    }
  }, [dispatch, rockets.length]);

  return (
    <div className="rocket-list">
      {rockets.map((rocket) => (
        <SingleRocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          img={rocket.flickr_images}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
