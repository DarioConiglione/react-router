export default function ChiSiamo() {



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
            <div className="p-5 mb-4 bg-secondary-subtle rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Ci presentiamo</h1>
                    <p className="col-md-8 fs-4">
                        Sono colui che ha deciso di studiare FullStack e poi ha realizzato che scrivere un “Chi siamo” decente richiede più tempo di quanto sembri. Per questo ho chiesto una mano all’AI: non perché non sapessi farlo, ma perché ero troppo concentrato a capire come funziona davvero la logica delle cose per perdere tempo a scrivere le parole giuste.
                        Qui niente “Lorem ipsum”: ha ufficialmente rotto le scatole. Grazie ChatGPT per queste piccole cose.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Vedi i prodotti
                    </button>
                </div>
            </div>
            <footer></footer>
        </>


    );
}