import { useState } from 'react';

export function AdDesigner() {

    const [support, setSupport] = useState("Chocolate");
    const [colorTheme, setColorTheme] = useState("light")
    const [fontSize, setFontSize] = useState(30);


    function toggleLight() {
        if(colorTheme === "dark") {
            setColorTheme("light");
        }
    }

    function toggleDark() {
        if(colorTheme === "light") {
            setColorTheme("dark");
        }
    }


    const fontSizeStyle = {
        fontSize: fontSize + "px"
    }

    return (
        <div className="adDesigner">
            <h2 className="adDesignerHeader">Ad Designer</h2>
            <div className={"ad " + colorTheme}>
                <p>Vote For</p>
                <h2 style={fontSizeStyle}>{support}</h2>
            </div>
            <h3 className="adDesignerSubHeaders">What to Support</h3>
            <div className="flavorButtonsContainer">
                <button onClick={() => setSupport("Chocolate")}>Chocolate</button>
                <button onClick={() => setSupport("Vanilla")}>Vanilla</button>
                <button onClick={() => setSupport("Strawberry")}>Strawberry</button>
            </div>
            <h3 className="adDesignerSubHeaders">Color Theme</h3>
            <div className="colorThemeButtonsContainer">
                <button onClick={toggleLight}>Light</button>
                <button onClick={toggleDark}>Dark</button>
            </div>
            <h3 className="adDesignerSubHeaders">Font Size</h3>
                <div className="fontSizeButtonsContainer">
                    <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
                    <input className="fontSize" type="number" value={fontSize}></input>
                    <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
                </div>
        </div>
    )

}