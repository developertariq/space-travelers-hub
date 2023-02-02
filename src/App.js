import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import './App.css';
import Rockets from './pages/Rockets';
import 'bootstrap/dist/css/bootstrap.css';
import store from './Redux/configureStore';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/Missions" element={<Missions />} />
              <Route path="/" element={<Rockets />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>

  );
}

export default App;
