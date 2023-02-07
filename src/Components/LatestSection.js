import { places } from "./utility/Places";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";

const LatestSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Travel Stories </div>
      <hr className="red__line" />
      <div className="card__list">
        {places?.map((place) => {
          return (
            <div className="vertical__card" key={place.id} onClick={() => navigate(`/${place.type}/${place.id}`)}>
              <ImageCard url={place.url} title={place.title} about={place.about} type={place.type} date={place.date} cardType="vertical" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default LatestSection;
