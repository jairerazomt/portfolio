import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container pt-4">
                <Link href="/">
                    <a className="navbar-brand fs-4 px-4">JAEM &#47; Developer Portfolio</a>
                </Link>
                <div className="container fs-5 d-flex align-items-end flex-column">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/github">
                                <a className="nav-link">Github</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </nav>
)

export default Navbar;