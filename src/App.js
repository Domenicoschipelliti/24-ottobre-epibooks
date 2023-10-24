
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './componets/MyNav';
import MyFooter from './componets/MyFooter';
import AllTheBooks from './componets/AllTheBooks';
import Welcome from './componets/Welcome';

function App() {
  return (
    <div>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>

      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
