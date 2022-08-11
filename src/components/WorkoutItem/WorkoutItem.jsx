export default function WorkoutItem({workout}) {
    return (
        <>
            { workout ?
                <div>
                    <li>
                        {workout.name}
                        {workout.reps}
                    </li>
                </div>
            :
                <p>no homes</p>
            }
        </>
    )
}