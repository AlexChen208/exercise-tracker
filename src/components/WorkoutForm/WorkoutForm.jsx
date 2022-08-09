import './WorkoutForm.css'
import {useState} from 'react'
import * as workoutsAPI from '../../utilities/workouts-api'
export default function WorkoutForm({addWorkout}) {
    const [newWorkout, setNewWorkout] = useState({
        name: "",
        reps: ""
    })

    function handleChange(event) {
        const newNewWorkout = {
            ...newWorkout,
            [event.target.name]: event.target.value
        }
        setNewWorkout(newNewWorkout)
    }

    async function handleAddWorkout(event) {
        event.preventDefault();
        const workoutRes = await workoutsAPI.addWorkouts(newWorkout)
        addWorkout(workoutRes);
        setNewWorkout({
          name: "",
          reps: ""
        });
      }

  return (
    <>
      <form className="WorkoutForm" onSubmit={handleAddWorkout}>
        <label>Add Workout</label>
        <input type="text" name="name" value={newWorkout.name} onChange={handleChange} placeholder="Add Workout" required></input>
        <input type="text" name="reps" value={newWorkout.reps} onChange={handleChange} placeholder="Add Repetitions" required></input>
        <button type="submit" className="btn btn-primary">Enter</button>
      </form>
    </>
  );
}
