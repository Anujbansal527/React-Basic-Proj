import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider.css";

const ImageSlider = ({ url, limit, page = 5 }) => {
  const [img, setImg] = useState([]);
  const [curSlide, setCurrSlide] = useState(0);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImg = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImg(data);
        setLoading(false);
      }
    } catch (error) {
      setErr(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImg(url);
  }, [url]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (err) {
    return <div className="error">{err}</div>;
  }

  const handelPrev = () => {
    setCurrSlide(curSlide === 0 ? img.length - 1 : curSlide - 1);
  };

  const handelNext = () => {
    setCurrSlide(curSlide === img.length - 1 ? 0 : curSlide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handelPrev}
      />
      {img && img.length
        ? img.map((img, i) => (
            <img
              className={
                curSlide === i
                  ? "current-img"
                  : "current-img hide-current-image"
              }
              src={img.download_url}
              alt={img.download_url}
              key={img.id}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handelNext}
      />
      <span className="circle-indicators">
        {img && img.length
          ? img.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrSlide(i)}
                className={
                  curSlide === i
                    ? "current-indicator"
                    : "current-indicator inactive-indiactor "
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
