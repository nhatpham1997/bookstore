export default function Nav() {
    return (
        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="header-menu">
                            <div className="logo">
                                <a href="/">
                                    <img src="/logobookstore.png" className="logo-dimensions" alt="Bookshop"></img>
                                </a>
                            </div>
                            <nav className="main-menu" role="navigation">
                                <ul className="nav-ul">
                                    <li className="menu-item">
                                        <a href="#" aria-current="page">Home</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" aria-current="page">Books</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" aria-current="page">Library</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" aria-current="page">Journal</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" aria-current="page">Buy Now</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header-links">
                                <a href="#" className="search-btn">
                                    <img className="search-dimensions" src="/search.svg"></img>
                                    <img className="shop-dimensions" src="/shop.svg"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
