import React from 'react';
import './App.css';
import './AdDesigner.css';
import './Header.css';
import './Votes.css';
import './index.css';
import { Header } from './Header.tsx';
import { AdDesigner } from './AdDesigner.tsx'
import { Votes } from './Votes.tsx';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <AdDesigner></AdDesigner>
        <Votes></Votes>
    </div>
  );
}

export default App;
