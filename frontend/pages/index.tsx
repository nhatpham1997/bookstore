import NavCom from '../components/Nav';
import Footer from '../components/Footer';
import Slider from '../containers/Home/Slider';
import { GetServerSideProps } from "next";
import Bestsellers from '../containers/Home/Bestsellers';
import { SlideModel } from '../api/Slide';
import { BookModel } from '../api/Book';
import AuthorOfMonth from '../containers/Home/AuthorOfMonth';
import Utilities from '../containers/Home/Utilities';
import Comments from '../containers/Home/Comments';
import { CommentModel } from '../api/Comment';

const slides = [
    {
        id: 1,
        picture: '/Ocelot_Berlin_02.jpg',
        descriptions: 'The world is quiet here',
        owner: 'Lemony Snicket'
    },
    {
        id: 2,
        picture: '/book.jpg',
        descriptions: 'The world is quiet here',
        owner: 'Lemony Snicket'
    },
    {
        id: 3,
        picture: '/The_wall.jpg',
        descriptions: 'The world is quiet here',
        owner: 'Lemony Snicket'
    },
];

const comments = [
    {
        id: 1,
        avatar: "/avatar/128-0.jpg",
        descriptions: "This is an impressive theme. It is very well designed and it works incredibly well.",
        owner: "LOCTEKMARC"
    },
    {
        id: 2,
        avatar: "/avatar/128-1.jpg",
        descriptions: "Design quality is minimalist, sleek, and clean. On top of all that, customer support is beyond amazing. I’ve seriously never had such amazing customer support before.",
        owner: "JESSEQLI"
    },
    {
        id: 3,
        avatar: "/avatar/128-2.jpg",
        descriptions: "Very nice theme, it adapts to whatever you need and has a great design. Do not hesitate to buy it. Quality and efficient technical support.",
        owner: "ALEXGL"
    },
    {
        id: 4,
        avatar: "/avatar/128-3.jpg",
        descriptions: "This is the best theme I found for my fashion shop. I was looking for a theme with beautiful minimal design, easy to install and setup, responsive and full featured. Aurum is exactly what I needed, and even more: The team offer a lovely support and for a beginner like me it is a crucial point! Thank you Laborator for your work, and continuous success!",
        owner: "4UR3LIEN"
    },
    {
        id: 5,
        avatar: "/avatar/128-4.jpg",
        descriptions: "Good support of theme. When a problem arose for my specific installation, they were able to track it down and fix it.",
        owner: "CHUCKY76"
    }
]

export interface HomeProps {
    slides: SlideModel[];
    books: BookModel[];
    bookOfAuthor: BookModel[];
    comments: CommentModel[];
}

export default function Home({slides, books, bookOfAuthor, comments}: HomeProps) {
    return (
        <div className="home-page">
            <NavCom/>
            <Slider slides={slides}/>
            <Bestsellers books={books}/>
            <AuthorOfMonth books={bookOfAuthor}/>
            <Utilities/>
            <Comments comments={comments}/>
            <Footer/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`http://localhost:5000/v1/book/`);
    const books = await res.json();
    const bookOfAuthor = books;
    return {props: {slides, books, bookOfAuthor, comments}}
}
