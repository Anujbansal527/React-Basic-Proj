import React, { useEffect, useState } from "react";

const RandomColour = () => {
  //hash colour - #456125
  //rgp colour - rgb(255,0,25) -> first for red ,secod for green , third for blue value upto 255-0

  const [typeOfClour, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColourUility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHEXRandom = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColourUility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRGBRandom = () => {
    const r = randomColourUility(256);
    const g = randomColourUility(256);
    const b = randomColourUility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfClour === "rgb") handleCreateRGBRandom();
    else handleCreateHEXRandom();
  }, [typeOfClour]);

  return (
    <div 
     style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    className="container">
      <button onClick={() => setType("hex")}>Genrate Random HEX Color</button>
      <button onClick={() => setType("rgb")}>Genrate Random RGB Color</button>
      <button
        onClick={typeOfClour === "hex" ? handleCreateHEXRandom : handleCreateRGBRandom}
      >
        Genrate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h1> {typeOfClour === "rgb" ? "RGB" : "HEX"}</h1>
        <h3> {color} </h3>
      </div>
    </div>
  );
};

export default RandomColour;
