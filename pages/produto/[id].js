export async function getStaticPaths(){
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback:'blocking'
    }
}

export async function getStaticProps(context){
    const id = context.params.id;
    return {
        props:{
            id:id
        }
    }
}

export default function Produtos(props){
    const id = props.id;
    return (
        <div>Id do produto: {props.id}</div>
    )
}