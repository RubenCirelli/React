export function Hello({name, age}){
    return (
            <>
            <p>Hello. <strong>{name}</strong>!</p>
            {!!age && age>18 ? <p>Your age is {age} </p>: <p>You are very young!</p>}
            {age>65 && <p>You are very OLD!</p>}
            
            
            </>
    )
}
