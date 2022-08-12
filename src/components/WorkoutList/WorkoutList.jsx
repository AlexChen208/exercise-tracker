import WorkoutItem from "../WorkoutItem/WorkoutItem"
export default function WorkoutList({workouts, navigate, setWorkOuts, handleDelete}) {
    return (
        <>
          <h3>Exercise List</h3>
          
            <ul>
              {workouts.map((workout, idx) => (
                <WorkoutItem workout={workout} navigate={navigate} handleDelete={ handleDelete} setWorkOuts={setWorkOuts} key={idx} />
              ))}
            </ul>
         
          
          
        </>
        
      )
}