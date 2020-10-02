import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function NavCom() {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navbar_bg}>
            <Container>
                <Navbar.Brand><Link href="/"><a><img src="/logobookstore.png" className={styles.logo_dimensions} alt="Bookshop"></img></a></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/books"><a>Books</a></Link>
                        <Link href="/library"><a>Library</a></Link>
                        <Link href="#"><a>Journal</a></Link>
                        <Link href="#"><a>Buy Now</a></Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">
                            <form className={styles.search_bar}>
                                <input type="search" name="search" pattern=".*\S.*" required />
                                <button className={styles.search_btn} type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <img className={styles.shop_dimensions} src="/shop.svg" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
