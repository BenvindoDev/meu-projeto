import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Carters" ano_lancamento={1985} />
                <Item marca="Pixolé" ano_lancamento={1990}/>
                <Item marca="Bicho Molhado" ano_lancamento={2000} />
                <Item marca="Pampers" />
                <Item marca="Huggies" />
                <Item marca="PomPom" />
                <Item />

            </ul>
        </>
    )
}

export default List