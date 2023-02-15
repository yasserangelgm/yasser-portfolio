import './skill-chart.styles.css';

const SkillChart = ({ skillName, percentage }) => {
  return (
    <>
      <div className="chart">
        <span>{skillName}</span>
        <footer>
          <div style={{ width: `${percentage}%` }}></div>
        </footer>
      </div>
    </>
  );
};

export default SkillChart;
