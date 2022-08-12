import * as workOutsAPI from '../../utilities/workouts-api'
import UpdateWorkout from '../UpdateWorkout/UpdateWorkout'

export default function WorkoutItem({workout, handleDelete, updateWorkout}) {
    return (
        <>
            { workout ?
                <div>
                    <li>
                        {workout.name}
                        {workout.reps}
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