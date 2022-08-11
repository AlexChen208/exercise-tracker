import WorkoutForm from '../../components/WorkoutForm/WorkoutForm'
import WorkoutList from '../../components/WorkoutList/WorkoutList'
import './WorkoutDetail.css'
import { useState, useEffect} from "react";
import * as workOutsAPI from '../../utilities/workouts-api'

export default function WorkoutDetail({user}) {
    const [workouts, setWorkOuts] = useState("")

    useEffect(function() {
        async function getAllWorkouts() {
            let users = await workOutsAPI.getAllWorkouts()
            setWorkOuts(users)
        }
        getAllWorkouts()
    }, [])

    function addWorkout(workout) {
        workOutsAPI.addWorkouts(workout)
        setWorkOuts([...workouts, workout])
    }

    // async function getWorkout() {
    //     let workout = await workOutsAPI.getAllWorkouts()
    //     console.log(workout)
    //     setWorkOuts(workout)
    //     } 

    // useEffect(function() {
    //     if (user) {
    //       getWorkout()
    //     }
    //   }, [user])



    return (
        <div>
        <span className="date">{new Date().toLocaleDateString()}</span>
        { workouts && workouts.length > 0 ?

            <>
                <div className="form">
                <h2>Create An Exercise List</h2>
                <WorkoutForm addWorkout={addWorkout}/>
                </div>
                <WorkoutList workouts={workouts} />
            </>
        :
            <>
                <h1>No Current Exercises</h1>
                <WorkoutForm/>
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