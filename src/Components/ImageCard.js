import "./Home.css";

const ImageCard = ({ url, type, title, date, about, cardType }) => {
  return (
    <>
      <img className={cardType === "banner" ? "image" : "vertical__image"} src={url} alt={title} />

      <span className={cardType === "banner" ? "image__text" : "vertical__card__image__title"}>{title}</span>
      {cardType !== "banner" && <span className="vertical__image__about">{about.length > 150 ? about.substring(0, 150) + "..." : about}</span>}
      <span className={cardType === "banner" ? "image__date" : "vertical__image__date"}>
        {" "}
        {type} <span className={cardType !== "banner" ? "vertical__image__type" : ""}> / {date}</span>
      </span>
    </>
  );
};

export default ImageCard;
