import WorkoutForm from '../../components/WorkoutForm/WorkoutForm'
import WorkoutList from '../../components/WorkoutList/WorkoutList'
export default function WorkoutDetail({workouts}) {

    return (
        <div>
        { workouts && workouts.length > 0 ?

            <>
                <WorkoutList workouts={workouts} />
                <hr />
                <h2>Create An Exercise List</h2>
                <WorkoutForm />
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