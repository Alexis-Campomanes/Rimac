import './App.css';
import Button from './Components/Button/Button';
import Navbar from './Components/Navbar/Navbar';
import Wellcome from './Components/Wellcome/Wellcome';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wellcome />
      <Button />
      <Footer />
     
    </div>
  );
}

export default App;
