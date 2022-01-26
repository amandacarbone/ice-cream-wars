import { useState } from 'react';

export function Votes() {

    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);

    let totalVotes = chocolateVotes + vanillaVotes + strawberryVotes;
    let chocolatePercentage = ((chocolateVotes / totalVotes) * 100) || 0;
    let vanillaPercentage = ((vanillaVotes / totalVotes) * 100) || 0;
    let strawberryPercentage = ((strawberryVotes / totalVotes) * 100) || 0;

    function addVotes(e: any) {

        if(e.target.value === "Chocolate") {
            setChocolateVotes(chocolateVotes + 1)
        } else if(e.target.value === "Vanilla") {
            setVanillaVotes(vanillaVotes +1);
        } else if(e.target.value === "Strawberry") {
            setStrawberryVotes(strawberryVotes + 1);
        }

    }


    return (
        <div className="votesContainer">
            <h2>Vote Here</h2>
            <div className="flavorButtonsContainer">
                <button onClick={addVotes} value="Chocolate">Chocolate</button>
                <button onClick={addVotes} value="Vanilla">Vanilla</button>
                <button onClick={addVotes} value="Strawberry">Strawberry</button>
            </div>
            <div className="flavorBarsContainer">
                <h4>Chocolate: {chocolateVotes} ({chocolatePercentage.toFixed(2)}%)</h4>
                {chocolateVotes > 0 && <div style={{width: `${chocolatePercentage}%`}} className="chocolateBar"></div>}
                {chocolateVotes === 0 && <p>No votes yet.</p>}
                <h4>Vanilla: {vanillaVotes} ({vanillaPercentage.toFixed(2)}%)</h4>
                {vanillaVotes > 0 && <div style={{width: `${vanillaPercentage}%`}} className="vanillaBar"></div>}
                {vanillaVotes === 0 && <p>No votes yet.</p>}
                <h4>Strawberry: {strawberryVotes} ({strawberryPercentage.toFixed(2)}%)</h4>
                {strawberryVotes > 0 && <div style={{width: `${strawberryPercentage}%`}} className="strawberryBar"></div>}
                {strawberryVotes === 0 && <p>No votes yet.</p>}
            </div>
        </div>
    )
    
}