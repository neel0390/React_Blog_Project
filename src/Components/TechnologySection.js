import React from "react";
import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";
import { technology } from "./utility/technology";

const TechnologySection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Technology Stories</div>
      <hr className="red__line" />
      <div className="card__list">
        {technology?.map((technology) => {
          return (
            <div className="vertical__card" key={technology.id} onClick={() => navigate(`/${technology.type}/${technology.id}`)}>
              <ImageCard url={technology.url} title={technology.title} about={technology.about} type={technology.type} date={technology.date} cardType="vertical" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TechnologySection;
