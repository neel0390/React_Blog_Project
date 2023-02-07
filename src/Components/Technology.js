import React from "react";
import { technology } from "./utility/technology";
import HorizontalImageCard from "./HorizontalImageCard";
import { useNavigate } from "react-router-dom";

const Technology = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Technology Stories</div>
      <hr className="red__line" />
      <div className="articles__list">
        {technology?.map((technology) => {
          return (
            <div className="article__container" key={technology.id} onClick={() => navigate(`/${technology.type}/${technology.id}`)}>
              <HorizontalImageCard url={technology.url} title={technology.title} about={technology.about} date={technology.date} type={technology.type} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Technology;
