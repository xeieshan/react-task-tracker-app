import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselView = () => {
    return (
<Carousel autoPlay infiniteLoop interval={10000} showArrows showIndicators showThumbs={false} stopOnHover dynamicHeight centerMode axis="horizontal" style={{width: "100%", height: "100%"}}>
    <div>
      <img alt="" src="https://picsum.photos/id/0/200/300" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="https://picsum.photos/id/1/200/300" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="https://picsum.photos/id/10/200/300" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="https://picsum.photos/id/100/200/300" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src="https://picsum.photos/id/1003/200/300" />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
    );
}
export default CarouselView;