import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Carters" />
                <Item marca="Pixolé" />
                <Item marca="Bicho Molhado" />
                <Item marca="Pampers" />
                <Item marca="Huggies" />
                <Item marca="PomPom" />
            </ul>
        </>
    )
}

export default List