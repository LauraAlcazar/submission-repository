import Part from './Part';
const Content = ({ exercises }) => {    
    return (
        <>
            {exercises.map((part, index) => (
                <p key={index}>
                {part.exerciseTitle}: {part.exercisesNumber}
                <Part exercise={part} />
                </p>
            ))}
        </>
    )
}
export default Content