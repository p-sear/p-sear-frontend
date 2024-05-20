import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const Timer = ({ className }) => {
  const [count, setCount] = useState(300);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 0) {
          clearInterval(timerId);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={className}>
      <span>{formatTime(count)}</span>
    </div>
  );
};

Timer.defaultProps = {
  className: '',
};

Timer.propTypes = {
  className: PropTypes.string,
};

export default Timer;
