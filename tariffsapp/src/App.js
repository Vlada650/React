import './App.css';
import List from './components/tariffs';
import './components/tariffs.css'

const tariffs = [
  {
    header: "Безлимитный 300",
    currency: "руб",
    price: "300",
    month: "/мес",
    speed: "до 10 Мбит/сек ",
    text: "Объем включенного трафика не ограничен"
  }, {
    header: "Безлимитный 450",
    currency: "руб",
    price: "450",
    month: "/мес",
    speed: "до 50 Мбит/сек ",
    text: "Объем включенного трафика не ограничен"
  }, {
    header: "Безлимитный 550",
    currency: "руб",
    price: "550",
    month: "/мес",
    speed: "до 100 Мбит/сек ",
    text: "Объем включенного трафика не ограничен"
  }, {
    header: "Безлимитный 1000",
    currency: "руб",
    price: "1000",
    month: "/мес",
    speed: "до 200 Мбит/сек ",
    text: "Объем включенного трафика не ограничен"
  }
];

function App() {
  return (
    <div className="App">
      {
        tariffs.map((tariff) =>
          <List key={tariff.tariff} header={tariff.header} currency={tariff.currency} price={tariff.price} month={tariff.month} speed={tariff.speed} text={tariff.text} />
        )
      }
      <List />
    </div>
  );
}

export default App;
