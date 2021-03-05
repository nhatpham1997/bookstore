import Carousel from 'react-multi-carousel';
import { BookModel } from '../../api/Book';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import styles from '../../styles/Home/Bestsellers.module.css';
import {formatCurrency} from '../../utils';

export interface BestsellersProps {
    books: BookModel[];
}

export default function Bestsellers({ books }: BestsellersProps) {
    return (
        <Container className={styles.bestsellers}>
            <Row>
                <Col sm="12" className={styles.title_dimensions}>
                    <h2>Bestsellers</h2>
                    <small>Top selling books of 2020</small>
                </Col>
                <Col sm="12">
                    <div className={styles.section}>
                        {books?.map((item) => (
                            <Link key={item._id} href="/book/[id]" as={`/book/${item._id}`}>
                                <div key={item._id} className={styles.item_slick}>
                                    <img src={`${process.env.PHOTOS_API_URL}/${item.photos[0].path}`}></img>
                                    <h3>{item.name}</h3>
                                    <p>{item.category}</p>
                                    <a>{formatCurrency(item.price)}</a>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}