import axios from 'axios';
export default function Prodotti() {

    const api_products = 'https://fakestoreapi.com/products'

    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error)
        });




    return (

        <>
            <header></header>
            <main> <h1>PROVA PRODOTTI</h1> </main>
            <footer></footer>
        </>

    );
}