export function AdDesigner() {

    return (
        <div className="adDesignerContainer">
            <h2 className="adDesignerHeader">Ad Designer</h2>
            <div className="ad">Vote For</div>
            <h2 className="adDesignerSubHeaders">What to Support</h2>
            <div className="flavorButtonsContainer">
                <button className="flavorButtons">Chocolate</button>
                <button className="flavorButtons">Vanilla</button>
                <button className="flavorButtons">Strawberry</button>
            </div>
            <h2 className="adDesignerSubHeaders">Color Theme</h2>
            <div className="colorThemeButtonsContainer">
                <button className="light">Light</button>
                <button className="dark">Dark</button>
            </div>
            <h2 className="adDesignerSubHeaders">Font Size</h2>
                <div className="fontSizeButtonsContainer">
                    <button className="down">Down</button>
                    <button className="up">Up</button>
                </div>
            <h2>Vote Here</h2>
            <div className="flavorButtonsContainer">
                <button className="flavorButtons">Chocolate</button>
                <button className="flavorButtons">Vanilla</button>
                <button className="flavorButtons">Strawberry</button>
            </div>
        </div>
    )

}