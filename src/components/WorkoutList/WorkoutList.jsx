import WorkoutItem from "../WorkoutItem/WorkoutItem"
import './WorkoutList.css'

export default function WorkoutList({workouts, handleDelete, updateWorkout}) {
    return (
        <div className="list">
          <h3>Exercise List</h3>
            <ul>
              {workouts.map((workout, idx) => (
                <WorkoutItem workout={workout} handleDelete={ handleDelete} updateWorkout={updateWorkout} key={idx} />
              ))}
            </ul>
        </div>
        
      )
}