import Link from "next/link";

export default function Home(){
    return  (
        <div>
            <div>Home</div>
            <Link href="/sobre">
                <a>Acessar pagina Sobre</a>            
            </Link>
            <br/>
            <Link href="/tempo">
                <a>Acessar pagina Tempo</a>            
            </Link>
        </div>
    )
}