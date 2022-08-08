import {useState} from 'react'
import WorkoutActivity from '../../components/WorkoutActivity/WorkoutActivity'
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm'
export default function List() {
    const [workouts, setWorkOuts] = useState([
        {name: "Bench Press"},
        {name: "Squats"},
        {name: "Leg Press"}
    ])

    function addWorkout(workout) {
        setWorkOuts([...workouts, workout])
    }

    return (
        <div>
        <WorkoutActivity workouts={workouts} />
        <WorkoutForm addWorkout={addWorkout}/>
        </div>
    )
}