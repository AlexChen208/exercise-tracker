export default function WorkoutItem({workout}) {
    return (
        <>
            { workout ?
                <div>
                    <p>{workout.name}</p>
                    <p>{workout.reps}</p>
                </div>
            :
                <p>no homes</p>
            }
        </>
    )
}