import React from 'react';
import Header from './components/header';
import MainPage from './components/mainpage';
import Footer from './components/footer';
import Gallery from './components/galleryofcards';
import UnitCards from './components/card';
import Allwords from './components/allwords';
import './App.css';
import 'normalize.css';
import './components/mainpage.scss';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header words={words} />
        <Switch>
          <Route exact path="/game">
            <Gallery data={words} />
          </Route>
          <Route exact path="/">
            <MainPage words={words} />
          </Route>
          <Route>Error 404 Page not found</Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}