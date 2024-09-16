
interface MeuProps{
    name: string;
}

function Comp({name}: MeuProps){
    return(
        <div>
            <h1>Ola {name}!</h1>
        </div>
    )
}

export default Comp;