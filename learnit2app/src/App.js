import React from 'react';
import Header from './components/header';
import MainPage from './components/mainpage';
import Footer from './components/footer';
import Gallery from './components/cardslider';
import Login from './components/unuse-loginform';
import './App.css';
import 'normalize.css';
import './components/mainpage.scss';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const words = [
  {
    english: "Potato",
    russian: "Картошка",
    transcription: "pəˈteɪtəʊ",
    unit: "Овощи"
  }, {
    english: "Tomato",
    russian: "Помидор",
    transcription: "təˈmeɪtəʊ",
    unit: "Овощи"
  }, {
    english: "Carrot",
    russian: "Морковь",
    transcription: "ˈkærət",
    unit: "Овощи"
  }, {
    english: "Eggplant",
    russian: "Баклажан ",
    transcription: "ˈeɡplænt",
    unit: "Овощи"
  }, {
    english: "Corn",
    russian: "Кукуруза ",
    transcription: "kɔːrn",
    unit: "Овощи"
  }, {
    english: "Cucumber ",
    russian: "Огурец ",
    transcription: "ˈkjuːkʌmbər",
    unit: "Овощи"
  }, {
    english: "Cabbage",
    russian: "Капуста ",
    transcription: "ˈkæbɪdʒ",
    unit: "Овощи"
  }, {
    english: "Apple",
    russian: "Яблоко",
    transcription: "ˈæpl",
    unit: "Фрукты"
  }, {
    english: "Peach",
    russian: "Персик ",
    transcription: "piːtʃ",
    unit: "Фрукты"
  }, {
    english: "Pear",
    russian: "Груша ",
    transcription: "per",
    unit: "Фрукты"
  }, {
    english: "Pineapple",
    russian: "Ананас ",
    transcription: "ˈpaɪnæpl",
    unit: "Фрукты"
  }, {
    english: "Banana",
    russian: "Банан ",
    transcription: "bəˈnænə",
    unit: "Фрукты"
  }, {
    english: "T-shirt",
    russian: "Футболка ",
    transcription: "ˈtiːʃərt",
    unit: "Одежда"
  }, {
    english: "Shorts",
    russian: "Шорты ",
    transcription: "ʃɔːrts",
    unit: "Одежда"
  }, {
    english: "Pants",
    russian: "Брюки",
    transcription: "pænts",
    unit: "Одежда"
  }, {
    english: "Dress",
    russian: "Платье ",
    transcription: "dres",
    unit: "Одежда"
  }, {
    english: "Jacket",
    russian: "Куртка",
    transcription: "ˈdʒækɪt",
    unit: "Одежда"
  }, {
    english: "Cat",
    russian: "Кот",
    transcription: "kæt",
    unit: "Животныее"
  }, {
    english: "Dog",
    russian: "Собака",
    transcription: "dɔːɡ",
    unit: "Животныее"
  }, {
    english: "Parrot",
    russian: "Попугай",
    transcription: "ˈpærət",
    unit: "Животныее"
  }, {
    english: "Tiger",
    russian: "Тигр",
    transcription: "ˈtaɪɡər",
    unit: "Животныее"
  }, {
    english: "Lion",
    russian: "Лев",
    transcription: "ˈlaɪən",
    unit: "Животныее"
  }
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