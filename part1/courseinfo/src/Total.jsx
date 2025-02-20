const Total = ({exercises}) => {  
    const totalExercises = exercises.reduce((sum, part) => sum + part.exercisesNumber, 0); 
    return (
        <>
            <p>Number of exercises { totalExercises }</p>
        </>
    )
}
export default Total