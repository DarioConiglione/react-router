import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProdottoSingolo() {
    const { id } = useParams();
    console.log(id);

    function getData() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {

                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(getData, [])




    return (

        <>
            <div><h1>ID prodotto: {id}</h1></div>
        </>


    );
}