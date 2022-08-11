import WorkoutForm from '../../components/WorkoutForm/WorkoutForm'
import WorkoutList from '../../components/WorkoutList/WorkoutList'
import './WorkoutDetail.css'
import { useState, useEffect} from "react"
import { Link, useNavigate} from 'react-router-dom';
import * as workOutsAPI from '../../utilities/workouts-api'

export default function WorkoutDetail({user}) {
    const [workouts, setWorkOuts] = useState("")
    const navigate = useNavigate()

    useEffect(function() {
        async function getAllWorkouts() {
            let workout = await workOutsAPI.getAllWorkouts()
            setWorkOuts(workout)
        }
        getAllWorkouts()
    }, [])

    async function addWorkout(workout) {
        let workoutRes = await workOutsAPI.addWorkouts(workout)
        setWorkOuts([...workouts, workoutRes])
    }

    return (
        <div>
        <span className="date">{new Date().toLocaleDateString()}</span>
        { workouts && workouts.length > 0 ?

            <>
                <div className="form">
                <h2>Create An Exercise List</h2>
                <WorkoutForm addWorkout={addWorkout}/>
                </div>
                <WorkoutList setWorkOuts={setWorkOuts} navigate={navigate} workouts={workouts}/>
            </>
        :
            <>
                <h1>No Current Exercises</h1>
                <WorkoutForm addWorkout={addWorkout}/>
            </>
        }
    </div>  
    )
}

    

















// const [workouts, setWorkOuts] = useState([])

    // function addWorkout(workout) {
    //     console.log(workout)
    //     setWorkOuts([...workouts, workout])
    // }

    // async function handleSubmit(workoutData) {
    //     setWorkOuts(addWorkout(workoutData))
    // }
    // return (
    //     <div>
    //     <span>{new Date().toLocaleDateString()}</span>
    //     <WorkoutForm workouts={workouts} handleSubmit={handleSubmit} addWorkout={addWorkout}/>
    //     <WorkoutActivity workouts={workouts} handleSubmit={handleSubmit} />
    //     </div>
    // )