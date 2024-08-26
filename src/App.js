import './App.css';

import BlueHalf from './components/blueHalf';
import Signup from './components/Signup';
import Otp from './components/Otp';
import PersonalDetails from './components/PersonalDetail';
function App() {
  return (
    <div className="App md:grid grid-cols-[40%_60%] h-screen">
          <BlueHalf></BlueHalf>
          <div className="inputForm">
            <Signup/>
          </div>
          
    </div>
  );
}

export default App;
