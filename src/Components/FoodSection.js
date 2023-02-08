import React from "react";
import { food } from "./Assets/food";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";

const FoodSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="latest__section__heading">Latest Food Stories</div>
      <hr className="red__line" />
      <div className="card__list">
        {food?.map((food) => {
          return (
            <div className="vertical__card" key={food.id} onClick={() => navigate(`/${food.type}/${food.id}`)}>
              <ImageCard url={food.url} title={food.title} about={food.about} type={food.type} date={food.date} cardType="vertical" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodSection;
