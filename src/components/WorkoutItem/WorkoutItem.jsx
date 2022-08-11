import * as workOutsAPI from '../../utilities/workouts-api'

export default function WorkoutItem({workout, navigate, setWorkOuts}) {

    async function handleDelete(workout) {
        await workOutsAPI.deleteWorkout(workout)
        navigate('/detail')
    }

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
                </div>
            :
                <p>No Exercise</p>
            }
        </>
    )
}