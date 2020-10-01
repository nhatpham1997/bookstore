import { GetServerSideProps } from "next";
import { SlideModel } from "../api/Slide";
import Footer from "../components/Footer";
import NavCom from '../components/Nav';
import Slider from '../containers/Library/Slider';

const slides = [
    {
        id: 1,
        picture: './library/slide1.jpg',
        description: 'blablabla',
        owner: 'olaola'
    },
    {
        id: 2,
        picture: './library/slide2.jpg',
        description: 'blablabla',
        owner: 'olaola'
    },
    {
        id: 3,
        picture: './library/slide3.jpg',
        description: 'blablabla',
        owner: 'olaola'
    }
]

export interface LibraryProps {
    slides: SlideModel[];
}

export default function Library({slides}: LibraryProps) {
    return (
        <div>
            <NavCom/>
            <Slider slides={slides}/>
            <Footer/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {props: {slides}}
}