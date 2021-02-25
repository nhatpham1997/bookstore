import { BookModel } from "../api/Book";
import { GetServerSideProps } from "next";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sidebar from "../containers/Book/Sidebar";
import NavCom from "../components/Nav";
import Footer from "../components/Footer";
import InfiniteLoading from '../containers/Books/InfiniteLoading';
import styles from '../styles/Books/index.module.css';

export interface BooksProps {
    sidebar: BookModel[];
    books: BookModel[];
}

export default function Books({ sidebar, books }: BooksProps) {
    return (
        <div>
            <NavCom />
            <Container>
                <Row>
                    <Col sm="12">
                        <h2>Book</h2>
                        <small>Showing 1-12 of 13 results</small>
                    </Col>
                    <Col sm="12">
                    </Col>
                </Row>
                <Row>
                    <Col sm="3">
                        <Sidebar books={sidebar} />
                    </Col>
                    <Col sm="9">
                        <InfiniteLoading books={books} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const sidebar = books.filter(books => books.id < 5);
//     return { props: { books, sidebar } }
// }

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:5000/v1/book/`);
    const data = await res.json();
    const sidebar = data.filter(data => data.id < 5);
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            books: data,
            sidebar
        }, // will be passed to the page component as props
    }
}