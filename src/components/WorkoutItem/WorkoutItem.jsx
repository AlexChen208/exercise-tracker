import './WorkoutItem.css'
import UpdateWorkout from '../UpdateWorkout/UpdateWorkout'

export default function WorkoutItem({workout, handleDelete, updateWorkout}) {
    return (
        <>
            { workout ?
                <div>
                    <li className=''>
                        <div>Workout: {workout.name}</div>
                        <div className='reps'>Reps: {workout.reps}</div>
                    </li>
                    <form>
                    <button onClick={() => handleDelete(workout._id)}>X</button>
                    </form>
                    <UpdateWorkout workout={workout} updateWorkout={updateWorkout}/>
                </div>
            :
                <p>No Exercise</p>
            }
        </>
    )
}