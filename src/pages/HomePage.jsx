export default function HomePage() {


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
                <div className="p-5 mb-4 bg-secondary-subtle rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Benvenuti nel progetto DEMO!</h1>
                        <p className="col-md-8 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            Example button
                        </button>
                    </div>
                </div>
                <div className="container bg-light p-3 rounded-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam dicta soluta at, perferendis ipsa officiis possimus iste dolor sequi debitis earum minus ea dolorum necessitatibus placeat iure obcaecati atque neque quia culpa magnam unde cum! Natus adipisci cupiditate sequi ducimus, facere earum fugiat porro aut repellendus beatae culpa libero ipsa minima nostrum illo molestias modi! Nemo qui blanditiis asperiores illum voluptatum culpa magni fugiat praesentium, veritatis sint rerum quaerat aspernatur temporibus, eveniet dolorum consequuntur autem iure exercitationem obcaecati harum tempore beatae quisquam nam. Laudantium autem voluptatem omnis, quia quidem architecto! Ipsa doloremque maxime neque est? Consectetur ab suscipit, at quidem esse obcaecati. Ullam illum cupiditate sed ut dolorem molestias fuga soluta consequatur quidem, voluptatum quia quae voluptatem suscipit pariatur facere, dolores vel, explicabo dignissimos! At dolorum blanditiis architecto doloribus repellat eius reprehenderit voluptatum nobis deserunt possimus accusamus, a dignissimos? Facilis sapiente iure totam maiores quae unde architecto, placeat maxime repudiandae qui voluptatibus cupiditate nobis porro quam mollitia accusantium obcaecati illum incidunt magnam. Aperiam molestiae omnis vero autem, est voluptas sit amet explicabo molestias quia a eius consequuntur reprehenderit! Ab non voluptatem cupiditate voluptas nam omnis eum earum! Quibusdam necessitatibus est suscipit fugiat debitis, impedit dolor? Rerum corporis totam pariatur!</p>
                </div>
            </main>

            <footer>

                <div className="container mt-5">
                    <div className="row row-cols-3">

                        <div>
                            <ul class="list-group list-group-numbered">
                                <li class="list-group-item">Active item</li>
                                <li class="list-group-item">Item</li>
                                <li class="list-group-item">Disabled item</li>
                            </ul>
                        </div>

                        <div>
                            <ul class="list-group list-group-numbered">
                                <li class="list-group-item">Active item</li>
                                <li class="list-group-item">Item</li>
                                <li class="list-group-item">Disabled item</li>
                            </ul>
                        </div>

                        <div>
                            <ul class="list-group list-group-numbered">
                                <li class="list-group-item">Active item</li>
                                <li class="list-group-item">Item</li>
                                <li class="list-group-item">Disabled item</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </footer>


        </>


    );
}