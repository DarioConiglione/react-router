import axios from 'axios';
import { useState, useEffect, use } from 'react';

export default function Prodotti() {

    const [prodotti, setProdotti] = useState([])



    useEffect(() => {
        const api_products = 'https://fakestoreapi.com/products'

        axios.get(api_products)
            .then(response => {
                console.log(response.data);
                setProdotti(response.data)
            }).catch(error => {
                console.error(error)
            });
    }, []
    )


    return (

        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">Homepage</a>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/ChiSiamo" aria-current="page">Chi siamo
                                        <span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Prodotti">Prodotti</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-3'>

                        {
                            prodotti.map((prodotto) => (
                                <div className='col d-flex mt-4'>
                                    <div className="card h-100 bg-light shadow-lg p-3">
                                        <img className="card-img-top w-50 mx-auto d-block" src={prodotto.image} alt="Title" />
                                        <div className="card-body">
                                            <h4 className="card-title">{prodotto.title}</h4>
                                            <p className="card-text">{prodotto.description}</p>
                                            <small>{prodotto.price}€</small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </main>
            <footer></footer>
        </>

    );
}