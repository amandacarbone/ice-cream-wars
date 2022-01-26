import { useState } from 'react';

export function AdDesigner() {

    const [support, setSupport] = useState("Chocolate");
    const [colorTheme, setColorTheme] = useState("adLight")
    const [fontSize, setFontSize] = useState(30);

    function toggleChocolate() {
        if(support === "Vanilla" || support === "Strawberry") {
            setSupport("Chocolate");
        }
    }

    function toggleVanilla() {
        if(support === "Chocolate" || support === "Strawberry") {
            setSupport("Vanilla");
        }
    }

    function toggleStrawberry() {
        if(support === "Chocolate" || support === "Vanilla") {
            setSupport("Strawberry");
        }
    }

    function toggleLight() {
        if(colorTheme === "adDark") {
            setColorTheme("adLight");
        }
    }

    function toggleDark() {
        if(colorTheme === "adLight") {
            setColorTheme("adDark");
        }
    }

    function increaseFontSize() {
        setFontSize(fontSize + 1);
    }

    function decreaseFontSize() {
        setFontSize(fontSize - 1);
    }

    function updateFontSize(e: any) {
        setFontSize(e.target.value);
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
                <button onClick={toggleChocolate}>Chocolate</button>
                <button onClick={toggleVanilla}>Vanilla</button>
                <button onClick={toggleStrawberry}>Strawberry</button>
            </div>
            <h3 className="adDesignerSubHeaders">Color Theme</h3>
            <div className="colorThemeButtonsContainer">
                <button onClick={toggleLight}>Light</button>
                <button onClick={toggleDark}>Dark</button>
            </div>
            <h3 className="adDesignerSubHeaders">Font Size</h3>
                <div className="fontSizeButtonsContainer">
                    <button onClick={decreaseFontSize}>Down</button>
                    <input className="fontSize" type="number" value={fontSize} onChange={updateFontSize}></input>
                    <button onClick={increaseFontSize}>Up</button>
                </div>
        </div>
    )

}