import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-tsparticles';
import NavBar from './components/NavBar';
import Header from './components/Header';
function App() {
  return (
    <>
      <Particles
      params={
        {
          particles: {
            number: {
              value: 30, 
              density: {
                enable: true, 
                value_area: 900
              }
            }
          }
        }
      }
      />
      <NavBar/>
      <Header/>
    </>
  );
}

export default App;
