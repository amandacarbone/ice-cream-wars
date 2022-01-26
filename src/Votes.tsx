import { useState } from 'react';

export function Votes() {

    const [chocolateHeader, setChocolateHeader] = useState("No votes yet.");
    const [vanillaHeader, setVanillaHeader] = useState("No votes yet.");
    const [strawberryHeader, setStrawberryHeader] = useState("No votes yet.");
    const [chocolateVotes, setChocolateVotes] = useState(1);
    const [vanillaVotes, setVanillaVotes] = useState(1);
    const [strawberryVotes, setStrawberryVotes] = useState(1);
    const [totalVotes, setTotalVotes] = useState(1);
    const [percentage, setPercentage] = useState(0);
    const [width, setWidth] = useState(0);

    function voteChocolate() {

        setChocolateHeader(`Chocolate: ${chocolateVotes} (${percentage}%)`);
        setChocolateVotes(chocolateVotes + 1);

    }

    function voteVanilla() {

        setVanillaHeader(`Vanilla: ${vanillaVotes} (${percentage}%)`);
        setVanillaVotes(vanillaVotes + 1);

    }

    function voteStrawberry() {

        setStrawberryHeader(`Strawberry: ${strawberryVotes} (${percentage}%)`);
        setStrawberryVotes(strawberryVotes + 1);

    }

    function calculateTotalVotes() {

        setTotalVotes(chocolateVotes + vanillaVotes + strawberryVotes);

    }

    const flavorBarStyle = {
        width: width + "%"
    }

    return (
        <div className="votesContainer">
            <h2>Vote Here</h2>
            <div className="flavorButtonsContainer">
                <button onClick={voteChocolate}>Chocolate</button>
                <button onClick={voteVanilla}>Vanilla</button>
                <button onClick={voteStrawberry}>Strawberry</button>
            </div>
            <div className="flavorBarsContainer">
                <h4>{chocolateHeader}</h4>
                <div className="chocolateBar"></div>
                <h4>{vanillaHeader}</h4>
                <div className="vanillaBar"></div>
                <h4>{strawberryHeader}</h4>
                <div className="strawberryBar"></div>
            </div>
        </div>
    )
    
}