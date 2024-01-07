function Color({ item }) {
    return (
        <div>
            <li key={item.id}>
                <h1>{item.name}</h1>
            </li>
        </div>
    )
}

export function Colors({ colors }) {
    return (
        <ul>
            {colors.map((item) => (
                <Color item={item} />
            ))}
        </ul>
    )
}