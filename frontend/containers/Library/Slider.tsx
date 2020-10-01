import styles from "../../styles/Library/Slider.module.css";
import Carousel from 'react-bootstrap/Carousel';
import { SlideModel } from "../../api/Slide";
import Container from 'react-bootstrap/Container';

export interface SliderProps {
    slides: SlideModel[];
}

export default function Slider({slides}) {
    return (
        <Container>
            <Carousel>
            {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.picture}
          />
          <Carousel.Caption>
            <h3>{item.description}</h3>
            <p>{item.owner}</p>
          </Carousel.Caption>
        </Carousel.Item>
            ))}
            </Carousel>
        </Container>
    )
}