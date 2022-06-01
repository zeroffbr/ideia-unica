import { useState } from "react"

export default function Home(){
    return  <div>
                <div>Home 1</div>
                <Contador/>            
            </div>
}

function Contador(){
    const [contador, setContador] = useState(1);
    function AdicionarContador(){
        setContador(contador + 1)
    }    
    return  (
        <div>
            <div>{contador}</div>
            <button onClick={AdicionarContador}>Adicionar</button>            
        </div>)
}