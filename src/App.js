import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
import Container2 from './Components/Container2/Index';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Container2 />
      <Footer />
    </div>
  );
}

export default App;
