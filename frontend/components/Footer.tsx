import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col sm="2" className={styles.menu_item}>
                    <h3>Genres</h3>
                    <div className={styles.list_menu}>
                        <ul>
                            <li>Literature</li>
                            <li>History</li>
                            <li>Romance</li>
                            <li>Business</li>
                        </ul>
                    </div>
                </Col>
                <Col sm="2" className={styles.menu_item}>
                <h3>Site Map</h3>
                    <div className={styles.list_menu}>
                        <ul>
                            <li>Home</li>
                            <li>Books</li>
                            <li>Library</li>
                            <li>Journal</li>
                            <li>Buy Now</li>
                        </ul>
                    </div>
                </Col>
                <Col sm="2" className={styles.menu_item}>
                <h3>Useful Links</h3>
                    <div className={styles.list_menu}>
                        <ul>
                            <li>Harvard</li>
                            <li>Leeds Library</li>
                            <li>York Uni</li>
                            <li>Bibliothèque</li>
                        </ul>
                    </div>
                </Col>
                <Col sm="2" className={styles.menu_item}>
                <h3>Ebooks</h3>
                    <div className={styles.list_menu}>
                        <ul>
                            <li>Fantasy</li>
                            <li>Teens</li>
                            <li>Health</li>
                            <li>Nobel Books</li>
                        </ul>
                    </div>
                </Col>
                <Col sm="2" className={styles.menu_item}>
                <h3>Social</h3>
                    <div className={styles.list_menu}>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Pinterest</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </Col>
                <Col sm="2" className={styles.menu_item}>
                <h3>Journal</h3>
                    <div className={styles.list_menu}>
                        <ul>
                            <li>Inspiration</li>
                            <li>Love</li>
                            <li>Posters</li>
                            <li>Review</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}