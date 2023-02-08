import React from "react";
import { useNavigate } from "react-router-dom";
import HorizontalImageCard from "./HorizontalImageCard";
import { food } from "./Assets/food";

const Food = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Food Stories</div>
      <hr className="red__line" />
      <div className="articles__list">
        {food?.map((food) => {
          return (
            <div className="article__container" key={food.id} onClick={() => navigate(`/${food.type}/${food.id}`)}>
              <HorizontalImageCard url={food.url} title={food.title} about={food.about} date={food.date} type={food.type} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Food;
