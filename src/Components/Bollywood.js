import React from "react";
import { bollywood } from "./Assets/bollywood";
import HorizontalImageCard from "./HorizontalImageCard";
import { useNavigate } from "react-router-dom";

const Bollywood = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Bollywood Stories</div>
      <hr className="red__line" />
      <div className="articles__list">
        {bollywood?.map((bollywood) => {
          return (
            <div className="article__container" key={bollywood.id} onClick={() => navigate(`/${bollywood.type}/${bollywood.id}`)}>
              <HorizontalImageCard url={bollywood.url} title={bollywood.title} about={bollywood.about} date={bollywood.date} type={bollywood.type} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Bollywood;
