import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AddGoal from "./component/AddGoal";
import Goals from "./component/Goals";

function App() {
  const [goals, setGoals] = useState([]);
  // useEffect events
  useEffect(() => {
    const refreshGoals = async () => {
      await fetchAndSetGoals();
    };
    refreshGoals();
  }, []);
  // fetch goals from server & set them to the state using setGoals
  const fetchAndSetGoals = async () => {
    try {
      // fetch goals from server
      const response = await axios.get("http://localhost:5000/goals");
      const goals = await response.data;
      // set goals to the state using setGoals
      setGoals(goals);
    } catch (error) {
      console.error(error);
    }
  };
  // add new goal & call fetchAndSetGoals() method
  const addGoal = async (goal) => {
    try {
      // add new goal
      const response = await axios.post("http://localhost:5000/goals", goal);
      const newGoal = await response.data;
      console.log(newGoal);
      // call fetchAndSetGoals() method
      await fetchAndSetGoals();
    } catch (error) {
      console.error(error);
    }
  };
  // delete goal & call fetchAndSetGoals() method
  const deleteGoal = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/goals/${id}`);
      const res = await response.data;
      console.log(res);
      //  call fetchAndSetGoals() method
      await fetchAndSetGoals();
    } catch (error) {
      console.error(error);
    }
  };
  // fetch goal & edit goal & call fetchAndSetGoals() method
  const editGoal = async (id) => {
    try {
      // fetch goal
      const response = await axios.get(`http://localhost:5000/goals/${id}`);
      const goal = await response.data;
      const obj = { ...goal, finished: !goal.finished };
      // edit goal
      const res = await axios.put(`http://localhost:5000/goals/${id}`, obj);
      const newGoal = await res.data;
      console.log(newGoal);
      // call fetchAndSetGoals() method
      await fetchAndSetGoals();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container app">
      <Header />
      <AddGoal onAddGoal={addGoal} />
      <Goals goals={goals} onDeleteGoal={deleteGoal} onEditGoal={editGoal} />
      <Footer />
    </div>
  );
}

export default App;
