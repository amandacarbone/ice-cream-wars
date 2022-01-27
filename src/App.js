import React from 'react';
import './App.css';
import './components/AdDesigner.css';
import './components/Header.css';
import './components/Votes.css';
import './index.css';
import { Header } from './components/Header.tsx';
import { AdDesigner } from './components/AdDesigner.tsx'
import { Votes } from './components/Votes.tsx';

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
