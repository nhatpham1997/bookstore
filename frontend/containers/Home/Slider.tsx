import Carousel from 'react-bootstrap/Carousel';
import { SlideModel } from "../../api/Slide";
import styles from '../../styles/Home/Slider.module.css';

export interface SliderProps {
  slides: SlideModel[];
}

export default function Slider({ slides }: SliderProps) {
  return (
    <Carousel className={styles.slider}>
      {slides?.map((item) => (
        <Carousel.Item key={item.id} className={styles.layer_slider}>
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
  )
}
