import Carousel from 'react-bootstrap/Carousel';
import { SlideModel } from "../../api/Slide";


export interface SliderProps {
  slides: SlideModel[];
}

export default function Slider({ slides }: SliderProps) {
  return (
    <Carousel className="slider-dimensions">
      {slides?.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100 layer-slider"
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
