import React from 'react';
import './App.css';
import 'normalize.css';
import './components/mainpage.scss';
import Header from './components/header'
import List from './components/mainpage'
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
  }, {
    english: "Carrot",
    russian: "Морковь",
    transcription: "aaaaaaa",
    unit: "Овощи"
  }, {
    english: "Eggplant",
    russian: "Баклажан ",
    transcription: "aaaaaaa",
    unit: "Овощи"
  }, {
    english: "Corn",
    russian: "Кукуруза ",
    transcription: "aaaaaaa",
    unit: "Овощи"
  }, {
    english: "Cucumber ",
    russian: "Огурец ",
    transcription: "aaaaaaa",
    unit: "Овощи"
  }, {
    english: "Cabbage",
    russian: "Капуста ",
    transcription: "aaaaaaa",
    unit: "Овощи"
  }, {
    english: "Apple",
    russian: "Яблоко",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Peach",
    russian: "Персик ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Pear",
    russian: "Груша ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Pineapple",
    russian: "Ананас ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Banana",
    russian: "Банан ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "T-shirt",
    russian: "Футболка ",
    transcription: "aaaaaaa",
    unit: "Одежда"
  }, {
    english: "Shorts",
    russian: "Шорты ",
    transcription: "aaaaaaa",
    unit: "Одежда"
  }, {
    english: "Pants",
    russian: "Брюки",
    transcription: "aaaaaaa",
    unit: "Одежда"
  }, {
    english: "Dress",
    russian: "Платье ",
    transcription: "aaaaaaa",
    unit: "Одежда"
  }, {
    english: "Jacket",
    russian: "Куртка",
    transcription: "aaaaaaa",
    unit: "Одежда"
  }, {
    english: "Cat",
    russian: "Кот",
    transcription: "aaaaaaa",
    unit: "Животныее"
  }, {
    english: "Dog",
    russian: "Собака",
    transcription: "aaaaaaa",
    unit: "Животныее"
  }, {
    english: "Parrot",
    russian: "Попугай",
    transcription: "aaaaaaa",
    unit: "Животныее"
  }, {
    english: "Tiger",
    russian: "Тигр",
    transcription: "aaaaaaa",
    unit: "Животныее"
  }, {
    english: "Lion",
    russian: "Лев",
    transcription: "aaaaaaa",
    unit: "Животныее"
  }, {
    english: "Apple",
    russian: "Яблоко",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Peach",
    russian: "Персик ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Pear",
    russian: "Груша ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Pineapple",
    russian: "Ананас ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  }, {
    english: "Banana",
    russian: "Банан ",
    transcription: "aaaaaaa",
    unit: "Фрукты"
  },
];

function App() {
  return (
    <div className="App">
      <Header words={words} />
      <List words={words} />
      <Footer />
    </div>
  );
}

export default App;