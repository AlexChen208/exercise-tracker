import {useState, useEffect} from 'react'

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
        console.log(newWorkout)
        console.log(addWorkout)
        addWorkout(newWorkout)
        setNewWorkout({
          name: "",
          reps: ""
        });
      }

  return (
    <>
      <form className="WorkoutForm" onSubmit={handleSubmit}>
        <label>Add Workout</label>
        <input type="text" name="name" value={newWorkout.name} onChange={handleChange} placeholder="Add Workout" required></input>
        <input type="text" name="reps" value={newWorkout.reps} onChange={handleChange} placeholder="Add Repetitions" required></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
