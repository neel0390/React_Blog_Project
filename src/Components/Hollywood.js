import React from "react";
import { hollywood } from "./Assets/hollywood";
import HorizontalImageCard from "./HorizontalImageCard";
import { useNavigate } from "react-router-dom";

const Hollywood = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Hollywood Stories</div>
      <hr className="red__line" />
      <div className="articles__list">
        {hollywood?.map((hollywood) => {
          return (
            <div className="article__container" key={hollywood.id} onClick={() => navigate(`/${hollywood.type}/${hollywood.id}`)}>
              <HorizontalImageCard url={hollywood.url} title={hollywood.title} about={hollywood.about} date={hollywood.date} type={hollywood.type} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hollywood;
