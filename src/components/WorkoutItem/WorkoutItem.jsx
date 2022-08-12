import * as workOutsAPI from '../../utilities/workouts-api'
import UpdateWorkout from '../UpdateWorkout/UpdateWorkout'

export default function WorkoutItem({workout, navigate, setWorkOuts, handleDelete}) {

    return (
        <>
            { workout ?
                <div>
                    <li>
                        {workout.name}
                        {workout.reps}
                    </li>
                    <form>
                        <button type="submit" onClick={() => handleDelete(workout._id)}>X</button>
                    </form>
                    <UpdateWorkout />
                </div>
            :
                <p>No Exercise</p>
            }
        </>
    )
}