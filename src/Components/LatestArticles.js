import { places } from "./Assets/Places";
import HorizontalImageCard from "./HorizontalImageCard";

const LatestArticles = () => {
  return (
    <>
      <div className="latest__section__heading">Latest </div>
      <hr className="red__line" />
      <div className="articles__list">
        {places?.map((place) => {
          return (
            <div className="article__container">
              <HorizontalImageCard url={place.url} title={place.title} about={place.about} date={place.date} type={place.type} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default LatestArticles;
