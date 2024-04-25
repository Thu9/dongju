import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlide() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="pt-[48px]">
      <Slider {...settings} className="h-full">
        <div>
          <img
            className="w-full"
            src={
              "https://campaign-cdn.pstatic.net/nfs/naverCode/content/20240422111241_444f4e450a4714825004502a34ca80f6.jpg"
            }
          ></img>
          <div className="absolute top-[50%] pl-[100px] translate-y-[-50%]">
            <div className="font-bold text-[40px]">TITLE TITLE1</div>
            <div className="text-[22px]">
              contents contents contents contents contents
            </div>
          </div>
        </div>

        <div>
          <div className="absolute top-[50%] pl-[100px] translate-y-[-50%]">
            <div className="font-bold text-[40px]">TITLE TITLE2</div>
            <div className="text-[22px]">
              contents contents contents contents contents2
            </div>
          </div>
        </div>

        <div>
          <div className="absolute top-[50%] pl-[100px] translate-y-[-50%]">
            <div className="font-bold text-[40px]">TITLE TITLE3</div>
            <div className="text-[22px]">
              contents contents contents contents contents3
            </div>
          </div>
        </div>

        <div>
          <div className="absolute top-[50%] pl-[100px] translate-y-[-50%]">
            <div className="font-bold text-[40px]">TITLE TITLE4</div>
            <div className="text-[22px]">
              contents contents contents contents contents4
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
