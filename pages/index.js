import Link from "next/link";

export default function Home(){
    return  <div>
                <div>Home</div>
                <Link href="/sobre">
                    <a>Acessar pagina sobre</a>            
                </Link>
            </div>
}