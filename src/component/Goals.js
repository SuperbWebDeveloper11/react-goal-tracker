const Goals = ({ goals, onDeleteGoal, onEditGoal }) => {
  return (
    <div className="goals">
      {goals.map((goal) => (
        <div
          className={
            goal.finished
              ? "row mb-1 finished-goal"
              : "row mb-1 unfinished-goal"
          }
          key={goal.id}
        >
          <div className="col" onDoubleClick={() => onEditGoal(goal.id)}>
            {goal.text}{" "}
          </div>
          <div className="col-md-auto"></div>
          <div className="col col-lg-2">
            <button
              className="btn btn-danger"
              onClick={() => onDeleteGoal(goal.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Goals;
