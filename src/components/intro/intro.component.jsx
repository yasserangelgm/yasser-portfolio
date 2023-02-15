import './intro.styles.css';

const Intro = ({ isLoading }) => {
  return (
    <>
      <div className={`intro-content ${isLoading ? 'loading' : ''}`}>
        <div className={`spinner-border`} role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
};

export default Intro;
