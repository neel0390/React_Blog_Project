const HorizontalImageCard = ({ url, type, about, date, title }) => {
  return (
    <>
      <div className="horizontal__image__container">
        <img className="image" src={url} alt={title} />
      </div>
      <div className="horizontal__text__container">
        <div className="vertical__card__image__title" style={{ flex: "2", margin: "0" }}>
          {title}
        </div>
        <div className="vertical__image__about" style={{ flex: "4", padding: "0" }}>
          {about.length > 250 ? about.substring(0, 250) + "..." : about}
        </div>
        <div>
          <span className={"vertical__image__date"}>
            {" "}
            {type} <span className={"vertical__image__type"}> / {date}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default HorizontalImageCard;
