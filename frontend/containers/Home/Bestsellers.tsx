import Carousel from 'react-multi-carousel';
import { BookModel } from '../../api/Book';

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
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Bestsellers</h2>
                    <small>Top selling books of 2020</small>
                </div>
                <div className="col-sm-12">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        ssr={true}
                    >
                        {books?.map((item) => (
                            <div key={item.id} className="item-slick">
                                <img src={item.picture}></img>
                                <h3>{item.name}</h3>
                                <p>{item.category}</p>
                                <a>€{item.price}</a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}