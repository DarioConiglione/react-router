import { useParams } from "react-router-dom";

export default function ProdottoSingolo() {
    const { id } = useParams();
    console.log(id);






    return (

        <>
            <div><h1>ID prodotto: {id}</h1></div>
        </>


    );
}