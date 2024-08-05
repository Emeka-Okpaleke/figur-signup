import './App.css';

import BlueHalf from './components/blueHalf';
import Signup from './components/Signup';
import Otp from './components/Otp';
import PersonalDetails from './components/PersonalDetail';
function App() {
  return (
    <div className="App">
          <BlueHalf></BlueHalf>
          <div className="inputForm">
            <Signup/>
            {/* <Otp/>
            <PersonalDetails/> */}

          </div>
          
    </div>
  );
}

export default App;
