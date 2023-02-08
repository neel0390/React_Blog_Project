import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { places } from "./Assets/Places";
import { food } from "./Assets/food";
import { bollywood } from "./Assets/bollywood";
import { hollywood } from "./Assets/hollywood";
import { fitness } from "./Assets/fitness";
import { technology } from "./Assets/technology";
import ImageCard from "./ImageCard";

const typeObj = {
  // contains all utility array based on type,for eg:if type is travel,then utility is places
  Travel: places,
  Food: food,
  Bollywood: bollywood,
  Hollywood: hollywood,
  Fitness: fitness,
  Technology: technology,
};

const BlogDetails = () => {
  const { type, id } = useParams(); // taking id and type from url using useParams().UseParams() always returns as an object
  const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState({
    //setting the selected blog by finding the id and when id matches,it stores in that state
    id,
    type,
    url: "",
    about: "",
    date: "",
    title: "",
  });

  const [remainingBlogs, setRemainingBlogs] = useState([]);

  useEffect(() => {
    setSelectedBlog(() => {
      let blog = typeObj[type].find(
        //based on typeObj created above,we will get the array which we need to loop nd then find the id which matches our url id
        (blog) => blog.id.toString() === id.toString()
      );
      return blog;
    });

    setRemainingBlogs(() => {
      let blogs = typeObj[type].filter(
        (blog) => blog.id.toString() !== id.toString() //here our id present in array is of number type but url always give string type data,so making it to string to match with url id
      );

      return blogs;
    });
  }, [id, type]);

  return (
    <>
      <div className="blog__details__container">
        <div className="blog__title">{selectedBlog.title}</div>
        <div className="blog__image__details">
          <img style={{ width: "100%", height: "100%" }} src={selectedBlog.url} alt={selectedBlog.title} />
        </div>
        <div
          style={{
            textAlign: "center",
            lineHeight: "24px",
            fontWeight: "900",
            color: "rgb(116 103 103)",
          }}>
          {selectedBlog.about}
        </div>
      </div>
      <div style={{ margin: "3% 12% 0 12%" }}>
        <div className="latest__section__heading">More From The Siren</div>
        <hr className="red__line" />
        <div className="card__list">
          {remainingBlogs?.map((blog) => {
            return (
              <div className="vertical__card" onClick={() => navigate(`/${blog.type}/${blog.id}`)}>
                <ImageCard url={blog.url} title={blog.title} about={blog.about} type={blog.type} date={blog.date} cardType="vertical" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
