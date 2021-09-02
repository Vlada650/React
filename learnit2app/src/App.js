import React from 'react';
import './App.css';
import 'normalize.css';
import './components/mainpage.scss';
import Header from './components/header'
import List from './components/mainpage'
import UnitCards from './components/allcards';
import Footer from './components/footer'


const words = [
  {
    english: "Potato",
    russian: "Картошка",
    transcription: "hhhhhh",
    unit: "Овощи"
  }, {
    english: "Tomato",
    russian: "Помидор",
    transcription: "aaaaaaa",
    unit: "Овощи"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <List words={words} />
      <UnitCards words={words} />
      <Footer />
    </div>
  );
}

export default App;