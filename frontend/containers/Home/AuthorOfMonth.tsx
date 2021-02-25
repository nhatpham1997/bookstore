import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BookModel } from '../../api/Book';
import Link from 'next/link';
import styles from '../../styles/Home/Aom.module.css';

export interface AuthorOfMonthProps {
    books: BookModel[];
}

export default function AuthorOfMonth({ books }: AuthorOfMonthProps) {
    console.log(books);
    return (
        <Container className={styles.aofm}>
            <Row>
                <Col sm="12" className={styles.title_dimensions}>
                    <h2>Author of the Month</h2>
                    <small>And his/her Bestsellers</small>
                </Col>
                <Col sm="12">
                    <Row>
                        <Col sm="4">
                            <img src="/jk-rowling-official-portrait.jpg" className={styles.author_image_dimensions}/>
                        </Col>
                        <Col sm="8">
                            <div className={styles.author_content}>
                                <Row>
                                    <Col sm="12">
                                        <div className={styles.author_title}>
                                            <h2>
                                                Maria Garcia
                                            </h2>
                                            <small>Novel Prize Winner 2008</small>
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div className={styles.author_content}>
                                            <p>Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade. Here name off yet she long sold easy whom. Differed oh cheerful procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter ability shyness article welcome be do on service.</p>
                                        </div>
                                    </Col>
                                    <Col sm="12" className={styles.list_item}>
                                        {books?.map((item) => (
                                            <Link key={item.id} href="/book/[id]" as={`/book/${item.id}`}>
                                                <div className={styles.book_item}>
                                                    <img src={`${process.env.PHOTOS_API_URL}/${item.photos[0].path}`}></img>
                                                    <h3>{item.name}</h3>
                                                    <p>{item.category}</p>
                                                    <a>€ {item.price}</a>
                                                </div>
                                            </Link>
                                        ))}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}