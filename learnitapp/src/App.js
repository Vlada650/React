import React from 'react';
import './App.css';
import 'normalize.css';
import './components/mainpage.scss';
import Header from './components/header'
import List from './components/mainpage'
import UnitCards from './components/allcards';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <UnitCards />
      <Footer />
    </div>
  );
}

export default App;
