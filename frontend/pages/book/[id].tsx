import { BookModel } from "../../api/Book";
import { GetServerSideProps } from "next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../../containers/Book/Product";
import Sidebar from "../../containers/Book/Sidebar";
import Nav from '../../components/Nav';
import Tablist from "../../containers/Book/Tablist";
import Footer from "../../components/Footer";
import RelatedProducts from "../../containers/Book/RelatedProducts";

interface BookDetailsProps {
    book: BookModel | null | undefined;
    booksSideBar: BookModel[];
}

export default function BookDetails({ book, booksSideBar }: BookDetailsProps) {
    return (
        <div>
            <Nav />
            <Container>
                <Row>
                    <Col sm="9">
                        <Product book={book} />
                        <Tablist book={book}/>
                        <RelatedProducts />
                    </Col>
                    <Col sm="3">
                        <Sidebar books={booksSideBar} />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params.id;
    const res = await fetch(`http://localhost:5000/v1/book/`);
    const data = await res.json();
    const book = await data.find(data => data._id === id);
    const booksSideBar = await data.filter(data => data.id <6);
    return { props: { book, booksSideBar} }
}