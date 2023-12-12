export function Button1 ({onClick,label}) {
return <button onClick={onClick} >{label}</button>
}
export function Button2 ({onClick,label}) {
    return <button onClick={onClick}>{label}</button>
}
export function Button3 ({onClick,label}) {
        return <button onClick={onClick}>{label}</button>
}
export function CounterDisplay ({Counter}) {
    return <div>
    <h2>i have counted to {Counter}</h2>
    </div>
}