import React from 'react';
import Header from './components/header';
import MainPage from './components/mainpage';
import Footer from './components/footer';
import Gallery from './components/cardslider';
import AddNewWord from './components/addnewword'
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
    tags: "Овощи"
  }, {
    english: "Tomato",
    russian: "Помидор",
    transcription: "təˈmeɪtəʊ",
    tags: "Овощи"
  }, {
    english: "Carrot",
    russian: "Морковь",
    transcription: "ˈkærət",
    tags: "Овощи"
  }, {
    english: "Eggplant",
    russian: "Баклажан ",
    transcription: "ˈeɡplænt",
    tags: "Овощи"
  }, {
    english: "Corn",
    russian: "Кукуруза ",
    transcription: "kɔːrn",
    tags: "Овощи"
  }, {
    english: "Cucumber ",
    russian: "Огурец ",
    transcription: "ˈkjuːkʌmbər",
    tags: "Овощи"
  }, {
    english: "Cabbage",
    russian: "Капуста ",
    transcription: "ˈkæbɪdʒ",
    tags: "Овощи"
  }, {
    english: "Apple",
    russian: "Яблоко",
    transcription: "ˈæpl",
    tags: "Фрукты"
  }, {
    english: "Peach",
    russian: "Персик ",
    transcription: "piːtʃ",
    tags: "Фрукты"
  }, {
    english: "Pear",
    russian: "Груша ",
    transcription: "per",
    tags: "Фрукты"
  }, {
    english: "Pineapple",
    russian: "Ананас ",
    transcription: "ˈpaɪnæpl",
    tags: "Фрукты"
  }, {
    english: "Banana",
    russian: "Банан ",
    transcription: "bəˈnænə",
    tags: "Фрукты"
  }, {
    english: "T-shirt",
    russian: "Футболка ",
    transcription: "ˈtiːʃərt",
    tags: "Одежда"
  }, {
    english: "Shorts",
    russian: "Шорты ",
    transcription: "ʃɔːrts",
    tags: "Одежда"
  }, {
    english: "Pants",
    russian: "Брюки",
    transcription: "pænts",
    tags: "Одежда"
  }, {
    english: "Dress",
    russian: "Платье ",
    transcription: "dres",
    tags: "Одежда"
  }, {
    english: "Jacket",
    russian: "Куртка",
    transcription: "ˈdʒækɪt",
    tags: "Одежда"
  }, {
    english: "Cat",
    russian: "Кот",
    transcription: "kæt",
    tags: "Животныее"
  }, {
    english: "Dog",
    russian: "Собака",
    transcription: "dɔːɡ",
    tags: "Животныее"
  }, {
    english: "Parrot",
    russian: "Попугай",
    transcription: "ˈpærət",
    tags: "Животныее"
  }, {
    english: "Tiger",
    russian: "Тигр",
    transcription: "ˈtaɪɡər",
    tags: "Животныее"
  }, {
    english: "Lion",
    russian: "Лев",
    transcription: "ˈlaɪən",
    tags: "Животныее"
  }
];

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/game">
            <Gallery data={words} />
          </Route>
          <Route exact path="/add">
            <AddNewWord />
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