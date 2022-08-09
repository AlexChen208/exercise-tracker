import WorkoutItem from '../WorkoutItem/WorkoutItem'
export default function WorkoutActivity({workouts}) {
    const workoutItem = workouts.map((workout, idx) => (
        <WorkoutItem workout={workout} key={idx} />
    ))
    return (
        <>
        <ul>
            {workoutItem}
        </ul>
        </>
    )
}