import { Parallax } from "react-parallax";
import Spacestation from "../img/spacestation.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={Spacestation} strength={800}>
    <div className="content">
      <span className="img-text">A trip to Space</span>
    </div>
  </Parallax>
);

export default ImageThree;
