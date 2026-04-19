import { Link } from "react-router";

export default function Header() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg_header ">
                    <div className="container-fluid">
                        <span className="fw-bold fs-5">MasterPannel</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/monsters">Mostri</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}