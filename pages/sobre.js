import Link from "next/link";

export default function Sobre(){
    return  (
        <div>
            <div>Sobre</div>
            <Link href="/">
                <a>Acessar pagina Home</a>            
            </Link>
            <br/>
            <Link href="/tempo">
                <a>Acessar pagina Tempo</a>            
            </Link>
        </div>
    )
}