export function Hello({name, age}){
    return (
            <>
            <p>Hello. <strong>{name}</strong>!</p>
            {!!age && <p>the {age} is rendered</p>}
            {age>18 && <p>the {age} is greater than 18</p>}
            {age>18 && age<65  && <p>the {age} is rendered and it is bigger than 18 and less than 65</p>}
            {age>18 && age<65 && name=="John" && <p>the {age} is rendered and it is bigger than 18 and less than 65 and the name prop is equal to "John".</p>}
            </>
    )
}
