import Carousel from 'react-multi-carousel';
import { BookModel } from '../../api/Book';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import styles from '../../styles/Home/Bestsellers.module.css';

export interface BestsellersProps {
    books: BookModel[];
}

export default function Bestsellers({ books }: BestsellersProps) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Container className={styles.bestsellers}>
            <Row>
                <Col sm="12" className={styles.title_dimensions}>
                    <h2>Bestsellers</h2>
                    <small>Top selling books of 2020</small>
                </Col>
                <Col sm="12">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        ssr={true}
                    >
                        {books?.map((item) => (
                            <Link key={item.id} href="/book/[id]" as={`/book/${item.id}`}>
                                <div key={item.id} className={styles.item_slick}>
                                    <img src={item.picture}></img>
                                    <h3>{item.name}</h3>
                                    <p>{item.category}</p>
                                    <a>€ {item.price}</a>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}