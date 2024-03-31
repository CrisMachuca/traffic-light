import React, { useState } from "react";

const TrafficLight = () => {
    const colors = ["red", "yellow", "green", "blue", "orange", "purple"];
    const [color, setColor] = useState("");
    const [customColor, setCustomColor] = useState("");
    const [originalColor, setOriginalColor] = useState(""); 

    //genera color aleatorio
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    // cambia el color actual por uno diferente seleccionado aleatoriamente del array colors
    const handleColorChange = () => {
        const currentColorIndex = colors.indexOf(color);
        let randomColorIndex = currentColorIndex;
        while (randomColorIndex === currentColorIndex) {
            randomColorIndex = Math.floor(Math.random() * colors.length);
        }
        setColor(colors[randomColorIndex]);
    };

    // actualiza el estado customColor con el color seleccionado por el usuario
    const handleCustomColorChange = (newColor) => {
        setCustomColor(newColor);
    };

    //  restaura el color original seleccionado y borra cualquier color personalizado
    const handleReset = () => {
        setColor(originalColor);
        setCustomColor("");
    };

    // guarda el color actual en el estado originalColor
    const handleOriginalColor = () => {
        setOriginalColor(color);
    };

    return (
        <>
            <h1 className="text-white">The Traffic Light</h1>
            <div className="container-fluid">
                <div className="traffic-light-container">
                    <div className="traffic-light">
                        <button
                            className={`light red ${color === "red" && "active-red"}`}
                            onClick={() => setColor("red")}
                        ></button>
                        <button
                            className={`light yellow ${color === "yellow" && "active-yellow"}`}
                            onClick={() => setColor("yellow")}
                        ></button>
                        <button
                            className={`light green ${color === "green" && "active-green"}`}
                            onClick={() => setColor("green")}
                        ></button>
                        {customColor && (
                            <button
                                className={`light ${customColor} ${color === customColor && `active-${customColor}`}`}
                                onClick={() => setColor(customColor)}
                            ></button>
                        )}
                    </div>
                    <div className="stick"></div>
                    <div className="base"></div>
                </div>
                <div className="box-buttons d-flex flex-column">
                    <p className="buttons-text text-center">Push button and change colors:</p>
                    <button className="random-color-button" onClick={handleColorChange}>
                        <span>Random</span>
                    </button>
                    <div className="custom-color-options">
                        <p className="buttons-text text-center">Choose an extra custom color:</p>
                        <button className="custom-color-button blue-button" onClick={() => handleCustomColorChange("blue")}>
                            
                        </button>
                        <button className="custom-color-button purple-button" onClick={() => handleCustomColorChange("purple")}>
                            
                        </button>
                        <button className="custom-color-button orange-button" onClick={() => handleCustomColorChange("orange")}>
                            
                        </button>
                    </div>
                    <div className="custom-color-options">
                        <p className="buttons-text text-center">Remove extra custom color:</p>
                    <button className="reset-button" onClick={handleReset}>
                        Reset
                    </button>
                    </div>
                </div>
            </div>
            <footer>
                Designed by Cris Machuca for <span className="footer-span">4Geeks Academy</span>
            </footer>
        </>
    );
};

export default TrafficLight;