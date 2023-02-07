import React from "react";
import { food } from "./utility/food";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";
import { fitness } from "./utility/fitness";

const FitnessSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Fitness Stories</div>
      <hr className="red__line" />
      <div className="card__list">
        {fitness?.map((fitness) => {
          return (
            <div className="vertical__card" key={fitness.id} onClick={() => navigate(`/${fitness.type}/${fitness.id}`)}>
              <ImageCard url={fitness.url} title={fitness.title} about={fitness.about} type={fitness.type} date={fitness.date} cardType="vertical" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FitnessSection;
