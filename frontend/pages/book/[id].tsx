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

const books = [
    {
        id: 1,
        name: 'American Fun',
        category: 'HEALTH, TEENS',
        author: 'PATRICK MODIANO',
        publisher: 'CENGAGE LEARNING',
        language: 'ENGLISH',
        pages: 89,
        yearPublished: 2009,
        picture: '/books/American_Fun.jpg',
        price: 45.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 2,
        name: 'A Girl Is a Half-Formed Thing',
        category: 'ROMANCE, TEENS',
        author: 'ISMAIL KADARE',
        publisher: 'THOMSON/REUTERS',
        language: 'ENGLISH',
        pages: 412,
        yearPublished: 1948,
        picture: '/books/A_Girl_Is_a_Half-Formed_Thing.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 3,
        name: 'Your Face in Mine',
        category: 'LITERATURE',
        author: 'LEO TOLSTOY',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH',
        pages: 514,
        yearPublished: 2002,
        picture: '/books/your_face_in_mine.jpg',
        price: 29.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 4,
        name: 'The Beauty and The Beast',
        category: 'FANTASY',
        author: 'LEO TOLSTOY',
        publisher: 'PEARSON',
        language: 'GERMAN',
        pages: 272,
        yearPublished: 1984,
        picture: '/books/the_beauty_and_the_beast.png',
        price: 28.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 5,
        name: 'All Our Names',
        category: 'LITERATURE',
        author: 'FRANZ KAFKA',
        publisher: 'PEARSON',
        language: 'ENGLISH, GERMAN',
        pages: 319,
        yearPublished: 2014,
        picture: '/books/all_our_names.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 6,
        name: 'Into the War',
        category: 'HISTORY',
        author: 'LEO TOLSTOY',
        publisher: 'PEARSON',
        language: 'GERMAN',
        pages: 272,
        yearPublished: 1984,
        picture: '/books/into_the_war.jpg',
        price: 15.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 7,
        name: 'The Third Plate',
        category: 'HISTORY, NOBEL BOOKS',
        author: 'DAN BARBER',
        publisher: 'PEARSON',
        language: 'ENGLISH, GERMAN',
        pages: 319,
        yearPublished: 2014,
        picture: '/books/The_Third_Plate.jpg',
        price: 34.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 8,
        name: 'The Silent History',
        category: 'HISTORY',
        author: 'ISMAIL KADARE',
        publisher: 'WOLTERS KLUWER',
        language: 'FRENCH, GERMAN',
        pages: 194,
        yearPublished: 1977,
        picture: '/books/The_Silent_History.jpg',
        price: 24.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 9,
        name: 'The Casual Optimist',
        category: 'BUSINESS',
        author: 'FRANZ KAFKA',
        publisher: 'REED ELSEVIER',
        language: 'ENGLISH',
        pages: 287,
        yearPublished: 1897,
        picture: '/books/The_Casual_Optimist.jpg',
        price: 19.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    },
    {
        id: 10,
        name: 'Can’t and Won’t',
        category: 'FANTASY',
        author: 'ISMAIL KADARE',
        publisher: 'RANDOM HOUSE',
        language: 'ENGLISH',
        pages: 718,
        yearPublished: 2007,
        picture: '/books/Can’t_and_Won’t.jpg',
        price: 19.00,
        descriptions: 'In 1937, F. Scott Fitzgerald was a troubled, uncertain man whose literary success was long over. In poor health, with his wife consigned to a mental asylum and his finances in ruins, he struggled to make a new start as a screenwriter in Hollywood. By December 1940, he would be dead of a heart  attack.Those last three years of Fitzgerald’s life, often obscured by the legend of his earlier Jazz Age glamour, are the focus of Stewart O’Nan’s gorgeously and gracefully written novel. With flashbacks to key moments from Fitzgerald’s past, the story follows him as he arrives on the MGM lot, falls in love with brassy gossip columnist Sheilah Graham, begins work on The Last Tycoon, and tries to maintain a semblance of family life with the absent Zelda and daughter, Scottie.'
    }
];

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
    console.log(id);
    const book = await books.find(books => books.id.toString() === id);
    const booksSideBar = await books.filter(books => books.id <6);
    return { props: { book, booksSideBar} }
}