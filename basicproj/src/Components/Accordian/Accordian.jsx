import React, { useState } from "react";
import data from "./data";
import "../Accordian/Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiselcet, setMultiselect] = useState(false);
  const [multi, setMulti] = useState([]);

  const handelMultiple = (id) => {
    let copyMultiple = [...multi]; //copying recent data

    const findIndexOfCurrentId = copyMultiple.indexOf(id);


    if (findIndexOfCurrentId === -1) copyMultiple.push(id);

    else copyMultiple.splice(findIndexOfCurrentId,1);


  };

  const handelSingleSelection = (id) => {
    setSelected(id !== selected ? id : null);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <h1>Accordian</h1>
        <br />
        <button onClick={() => setMultiselect(!multiselcet)}>
          Enble Multi Selection{" "}
        </button>
        <br/>
        {data && data.length > 0 ? (
          data.map((data, index) => (
            <div className="items">
              <div
                onClick={
                  multiselcet
                    ? () => handelMultiple(data.id)
                    : () => handelSingleSelection(data.id)
                }
                className="title"
                key={index}
              >
                <h3>{data.title}</h3>
                <span>+</span>
              </div>
              {multiselcet ? multi.indexOf(data.id) !== -1 && 
                    <div className="content">{data.content}</div>
                  
                : selected === data.id && (
                    <div className="content">{data.content}</div>
                  )}
              {/*
                    selected === data.id ? (
                  <p className="content">{data.content}</p>
                ) : (
                  ""
                )
                
                */}
            </div>
          ))
        ) : (
          <>No Data Found</>
        )}
      </div>
    </div>
  );
};

export default Accordian;
