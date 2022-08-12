import WorkoutItem from "../WorkoutItem/WorkoutItem"
export default function WorkoutList({workouts, handleDelete, updateWorkout}) {
    return (
        <>
          <h3>Exercise List</h3>
          
            <ul>
              {workouts.map((workout, idx) => (
                <WorkoutItem workout={workout} handleDelete={ handleDelete} updateWorkout={updateWorkout} key={idx} />
              ))}
            </ul>
         
          
          
        </>
        
      )
}