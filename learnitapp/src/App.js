import './App.css';
import Header from './components/header'
import List from './components/mainpage'
import Footer from './components/footer'
import Table from './components/allwords-table'
import Card from './components/card'
import UnitCards from './components/allcards'




import React from 'react';

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