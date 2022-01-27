import { useState } from 'react';

export function AdDesigner() {

    const [support, setSupport] = useState("Chocolate");
    const [isLight, setIsLight] = useState(true);
    const [fontSize, setFontSize] = useState(30);

    let addClass = "";
    if(isLight === true) {
        addClass = " light"
    } else {
        addClass = " dark"
    }

    const fontSizeStyle = {
        fontSize: fontSize + "px"
    }

    return (
        <div className="adDesigner">
            <h2 className="adDesignerHeader">Ad Designer</h2>
            <div className={"ad " + addClass}>
                <h3>Vote For</h3>
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
                <button onClick={() => setIsLight(true)}>Light</button>
                <button onClick={() => setIsLight(false)}>Dark</button>
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