import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BookModel } from "../../api/Book";
import styles from '../../styles/Book/Product.module.css';

export interface ProductProps {
    book: BookModel;
}

export default function Product({ book }: ProductProps) {
    return (
        <div className={styles.product_dimensions}>
            <Container>
                <Row>
                    <Col sm="5">
                        <img src={book.picture} className={styles.product_img} />
                    </Col>
                    <Col sm="7">
                        <div className={styles.product_title}>
                            <h3>{book.name}</h3>
                            <small>{book.category}</small>
                        </div>
                        <div className={styles.product_content}>
                            <p>{book.descriptions}</p>
                            <div className={styles.price_styles}>€{book.price}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}