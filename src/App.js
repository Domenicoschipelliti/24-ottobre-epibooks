
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './componets/MyNav';
import MyFooter from './componets/MyFooter';
import AllTheBooks from './componets/AllTheBooks';

import Welcome from './componets/Welcome';
import BookList from './componets/BookList';
import ClassSingleBook from './componets/ClassSingleBook';

function App() {
  return (
    <div>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>
      <BookList></BookList>
      <ClassSingleBook></ClassSingleBook>
      
      
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
