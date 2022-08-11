import WorkoutItem from "../WorkoutItem/WorkoutItem"
export default function WorkoutList({workouts, navigate, setWorkOuts}) {
    return (
        <>
          <h3>Exercise List</h3>
          
            <ul>
              {workouts.map((workout, idx) => (
                <WorkoutItem workout={workout} setWorkOuts={setWorkOuts} navigate={navigate} key={idx} />
              ))}
            </ul>
         
          
          
        </>
        
      )
}