import Link from "next/link";

export default function Tempo(props){
    console.log('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return  (
        <div>
            <div>Sobre</div>
            <Link href="/">
                <a>Acessar pagina Home</a>            
            </Link>
            <br/>
            <Link href="/sobre">
                <a>Acessar pagina Sobre</a>            
            </Link>
            <br/>
            <br/>
            <div>
                <div>{dynamicDateString} (dinâmico)</div>
                <div>{props.staticDateString} (estático)</div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps();');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}