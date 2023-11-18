import { Parallax } from "react-parallax";
import Satellite from "../img/satellite.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Satellite} strength={800}>
    <div className="content">
      <span className="img-text">A trip to Space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
