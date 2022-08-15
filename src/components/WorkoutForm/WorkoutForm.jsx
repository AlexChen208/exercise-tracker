import {useState, useEffect} from 'react'
import './WorkoutForm.css'
export default function WorkoutForm({addWorkout}) {
    const [newWorkout, setNewWorkout] = useState({
        name: "",
        reps: ""
    })

    function handleChange(event) {
        let newNewWorkout = {
            ...newWorkout,
            [event.target.name]: event.target.value
        }
        setNewWorkout(newNewWorkout)
    }


    async function handleSubmit(event) {
        event.preventDefault()
        addWorkout(newWorkout)
        setNewWorkout({
          name: "",
          reps: ""
        });
      }

  return (
    <form className="Workoutform"onSubmit={handleSubmit}>
  <div class="form-group">
    <label>Add Workout</label>
    <input type="text" name="name" value={newWorkout.name} onChange={handleChange} placeholder="Add Workout" required></input>
  </div>
  <div class="form-group">
    <label>Add Repetitions</label>
    <input type="text" name="reps" value={newWorkout.reps} onChange={handleChange} placeholder="Add Repetitions" required></input>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
}
