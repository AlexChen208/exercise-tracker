import {useState} from 'react'

export default function UpdateWorkout({workout, updateWorkout}) {
    const [updateWorkouts, setUpdateWorkout] = useState({
        name: "",
        reps: "",
    })

        function handleSubmit(event) {
        event.preventDefault()
        updateWorkout(workout._id, updateWorkouts)
        setUpdateWorkout({
            name: "",
            reps: "",
        })
    }

        function handleChange(event) {
            let newUpdateWorkout = {
                ...updateWorkouts,
                [event.target.name]: event.target.value,
                [event.target.reps]: event.target.value,
            }
            setUpdateWorkout(newUpdateWorkout)
        }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary">Edit<span className="bi"></span></button>
            <input type="text" name="name" value={updateWorkouts.name} onChange={handleChange} placeholder="Change Name"></input>
            <input type="text" name="reps" value={updateWorkouts.reps} onChange={handleChange} placeholder="Change Reps"></input>
        </form>
    )
}