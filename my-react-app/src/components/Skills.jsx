import { Carousel } from "react-responsive-carousel";
import skillsList from "../data/skillsData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/skills.scss"

function Skills() {
  return (
    <Carousel>
      {skillsList.map((slide) => (
        <div className="skills" key={slide.id}>
            <img src={slide.imgSrc} alt= {slide.name} />
          <p>{slide.name}</p>
        </div>
      ))}
    </Carousel>
  );
}
export default Skills;
