export default function WorkoutItem({workout}) {
    return(
        <li>
            {workout.name} 
            {workout.reps}
        </li>
    )
}