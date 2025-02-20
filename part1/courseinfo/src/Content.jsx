import Part from './Part';
const Content = ({ exercises }) => {    
    return (
        <>
            {exercises.map((part, index) => (
                <p key={index}>
                {part.name}: {part.exercises}
                <Part exercise={part} />
                </p>
            ))}
        </>
    )
}
export default Content