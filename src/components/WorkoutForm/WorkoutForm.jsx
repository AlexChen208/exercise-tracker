import {useState} from 'react'
export default function WorkoutForm({addWorkout}) {
    const [newWorkout, setNewWorkout] = useState({
        name: ""
    })

    function handleChange(event) {
        const newNewWorkout = {
            ...newWorkout,
            [event.target.name]: event.target.value
        }
        setNewWorkout(newNewWorkout)
    }

    function handleAddWorkout(event) {
        event.preventDefault();
        addWorkout(newWorkout);
        setNewWorkout({
          name: ""
        });
      }

  return (
    <>
      <form action="" onSubmit={handleAddWorkout}>
        <label>Add Workout</label>
        <input type="text" name="name" value={newWorkout.name} onChange={handleChange} placeholder="Add Workout" required></input>
        <button type="submit">Enter</button>
      </form>
    </>
  );
}
