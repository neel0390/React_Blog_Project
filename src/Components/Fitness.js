import React from "react";
import HorizontalImageCard from "./HorizontalImageCard";
import { fitness } from "./utility/fitness";
import { useNavigate } from "react-router-dom";

const Fitness = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Fitness Stories</div>
      <hr className="red__line" />
      <div className="articles__list">
        {fitness?.map((fitness) => {
          return (
            <div className="article__container" key={fitness.id} onClick={() => navigate(`/${fitness.type}/${fitness.id}`)}>
              <HorizontalImageCard url={fitness.url} title={fitness.title} about={fitness.about} date={fitness.date} type={fitness.type} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fitness;
