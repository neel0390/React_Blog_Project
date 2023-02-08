import "./Home.css";
import { banner } from "./Assets/banner";
import ImageCard from "./ImageCard";

const BannerSection = () => {
  return (
    <div className="section__grid">
      {banner?.map((banner, index) => {
        return (
          <div key={banner.id} className={index === 0 ? "first__banner" : index === 1 ? "second__banner" : "third__banner"}>
            <ImageCard url={banner.url} title={banner.title} date={banner.date} type={banner.type} cardType="banner" />
          </div>
        );
      })}
    </div>
  );
};
export default BannerSection;
