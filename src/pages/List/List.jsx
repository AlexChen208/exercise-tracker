import {useEffect, useState} from 'react'
import WorkoutActivity from '../../components/WorkoutActivity/WorkoutActivity'
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm'
import * as workOutsAPI from '../../utilities/workouts-api'
export default function List() {
    const [workouts, setWorkOuts] = useState([])

    function addWorkout(workout) {
        setWorkOuts([...workouts, workout])
    }

    async function handleSubmit(workoutData) {
        const updatedWorkOut = await workOutsAPI.addWorkouts(workoutData)
        setWorkOuts(updatedWorkOut)
    }

    return (
        <div>
        <span>{new Date().toLocaleDateString()}</span>
        <WorkoutForm addWorkout={addWorkout} handleSubmit={handleSubmit}/>
        <WorkoutActivity workouts={workouts}/>
        </div>
    )
}