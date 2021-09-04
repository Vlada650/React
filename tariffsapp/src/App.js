import './App.css';
import List from './components/tariffs';
import './components/tariffs.css'

const tariffs = [
  {
    header: "Безлимитный 300",
    price: "300",
    speed: "до 10 Мбит/сек "
  }, {
    header: "Безлимитный 450",
    price: "450",
    speed: "до 50 Мбит/сек "
  }, {
    header: "Безлимитный 550",
    price: "550",
    speed: "до 100 Мбит/сек "
  }, {
    header: "Безлимитный 1000",
    price: "1000",
    speed: "до 200 Мбит/сек "
  }
];

function App() {
  return (
    <div className="App">
      {
        tariffs.map((tariff) =>
          <List key={tariff.price} header={tariff.header} price={tariff.price} speed={tariff.speed} />
        )
      }
    </div>
  );
}

export default App;
