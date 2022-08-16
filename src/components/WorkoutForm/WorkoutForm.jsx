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
 <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <form className="card-title" onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Add Workout</label>
      <input type="text" name="name" value={newWorkout.name} onChange={handleChange} placeholder="Add Workout" required></input>
   </div>
   <div className="form-group">
     <label>Add Repetitions</label>
     <input type="text" name="reps" value={newWorkout.reps} onChange={handleChange} placeholder="Add Repetitions" required></input>
   </div>
   <button type="submit" className="btn btn-sm btn-primary">Submit</button>
 </form>
 </div>
</div>
  )
}

{/* <div className="card" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}