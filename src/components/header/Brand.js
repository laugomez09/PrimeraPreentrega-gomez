import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <Link to="/">
            <div>
                <a className="navbar-brand" href="bmnb" >STANLEY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </Link>
    )
}

export default Brand;