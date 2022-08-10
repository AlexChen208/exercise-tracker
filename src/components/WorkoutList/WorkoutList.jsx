import WorkoutItem from "../WorkoutItem/WorkoutItem"
export default function WorkoutList({workouts}) {
    return (
        <>
          <h3>Exercise List</h3>
          
            <ul>
              {workouts.map((workout, idx) => (
                <WorkoutItem workout={workout} key = {idx} />
              ))}
            </ul>
         
          
          
        </>
        
      )
}