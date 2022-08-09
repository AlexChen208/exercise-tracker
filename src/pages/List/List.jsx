import {useState} from 'react'
import WorkoutActivity from '../../components/WorkoutActivity/WorkoutActivity'
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm'
import * as workOutsAPI from '../../utilities/workouts-api'
export default function List() {
    const [workouts, setWorkOuts] = useState([])

    function addWorkout(workout) {
        setWorkOuts([...workouts, workout])
    }

    workOutsAPI.getWorkouts();

    return (
        <div>
        <WorkoutActivity workouts={workouts} />
        <WorkoutForm addWorkout={addWorkout}/>
        </div>
    )
}