import SpinnerImg from '../assets/images/spinner.gif';

const Spinner = () => {
  const spinnerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div className='spinner-containe' style={spinnerStyle}>
      <img src={SpinnerImg} style={{ width: '100px' }} />
      <p>로딩 중입니다. 잠시만 기다려 주세요.</p>
    </div>
  );
};

export default Spinner;
