import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AllRoutes from './AllRoutes';
// import './App.css';
import Navbar  from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
