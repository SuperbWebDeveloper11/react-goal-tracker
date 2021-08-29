import { useState } from "react";

const AddGoal = ({ onAddGoal }) => {
  const [text, setText] = useState("");
  const [finished, setFinished] = useState(false);
  const validateGoal = (e) => {
    e.preventDefault();
    // validate text
    if (!text) {
      alert("Please Enter Your Goal");
      return;
    }
    const goal = {
      text: text,
      finished: finished,
    };
    onAddGoal(goal);

    setText("");
    setFinished(false);
  };
  return (
    <div className="add-goal">
      <form onSubmit={validateGoal}>
        <div className="form-group">
          <input
            type="text"
            placeholder="type new goal"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <input
            type="checkbox"
            value={finished}
            id=""
            onChange={(e) => setFinished(e.currentTarget.checked)}
          />
        </div> */}
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            value={finished}
            onChange={(e) => setFinished(e.currentTarget.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Finished
          </label>
        </div>

        <br />
        <div>
          <button type="submit" className="btn btn-success">
            <i class="bi bi-plus-lg"></i> Add
          </button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default AddGoal;
