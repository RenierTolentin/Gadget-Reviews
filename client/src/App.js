import './App.css';
import Navbar from './components/html/Navbar';
import Home from './components/html/Home';
import SignIn from './components/html/SignIn';
import LogIn from './components/html/LogIn';
import Dashboard from './components/html/Dashboard';
import EntryLevel from './components/html/EntryLevel';
import MidRange from './components/html/MidRange';
import FlagShip from './components/html/FlagShip';
import Page404 from './components/html/Page404';
import Footer from './components/html/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ENTRYLEVEL_CHERRYMOBILE from './components/html/entrylevel/EntryLevel_CherryMobile';
import ENTRYLEVEL_VIVO from './components/html/entrylevel/EntryLevel_Vivo';
import ENTRYLEVEL_SAMSUNG from './components/html/entrylevel/EntryLevel_Samsung';
import ENTRYLEVEL_OPPO from './components/html/entrylevel/EntryLevel_Oppo';
import ENTRYLEVEL_INFINIX from './components/html/entrylevel/EntryLevel_Infinix';
import ENTRYLEVEL_TECNOMOBILE from './components/html/entrylevel/EntryLevel_TecnoMobile';
import ENTRYLEVEL_XIAOMI from './components/html/entrylevel/EntryLevel_Xiaomi';
import ENTRYLEVEL_REALME from './components/html/entrylevel/EntryLevel_Realme';
import MIDRANGE_VIVO from './components/html/midrange/MidRange_Vivo';
import MIDRANGE_SAMSUNG from './components/html/midrange/MidRange_Samsung';
import MIDRANGE_OPPO from './components/html/midrange/MidRange_Oppo';
import MIDRANGE_INFINIX from './components/html/midrange/MidRange_Infinix';
import MIDRANGE_TECNOMOBILE from './components/html/midrange/MidRange_TecnoMobile';
import MIDRANGE_XIAOMI from './components/html/midrange/MidRange_Xiaomi';
import MIDRANGE_MOTOROLA from './components/html/midrange/MidRange_Motorola';
import MIDRANGE_REALME from './components/html/midrange/MidRange_Realme';
import Registration from './components/html/Registration';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          
          <Route path="/EntryLevel" element={<EntryLevel/>}/>
          <Route path="/EntryLevel/:id" element={<EntryLevel/>}/>

          <Route path="/EntryLevel_CherryMobile" element={<ENTRYLEVEL_CHERRYMOBILE/>}/>
          <Route path="/EntryLevel_CherryMobile/:id" element={<ENTRYLEVEL_CHERRYMOBILE/>}/>

          <Route path="/EntryLevel_Vivo" element={<ENTRYLEVEL_VIVO/>}/>
          <Route path="/EntryLevel_Vivo/:id" element={<ENTRYLEVEL_VIVO/>}/>

          <Route path="/EntryLevel_Oppo" element={<ENTRYLEVEL_OPPO/>}/>
          <Route path="/EntryLevel_Oppo/:id" element={<ENTRYLEVEL_OPPO/>}/>

          <Route path="/EntryLevel_Samsung" element={<ENTRYLEVEL_SAMSUNG/>}/>
          <Route path="/EntryLevel_Samsung/:id" element={<ENTRYLEVEL_SAMSUNG/>}/>
          
          <Route path="/EntryLevel_Infinix" element={<ENTRYLEVEL_INFINIX/>}/>
          <Route path="/EntryLevel_Infinix/:id" element={<ENTRYLEVEL_INFINIX/>}/>
          
          <Route path="/EntryLevel_TecnoMobile" element={<ENTRYLEVEL_TECNOMOBILE/>}/> 
          <Route path="/EntryLevel_TecnoMobile/:id" element={<ENTRYLEVEL_TECNOMOBILE/>}/> 
          
          
          <Route path="/EntryLevel_Xiaomi" element={<ENTRYLEVEL_XIAOMI/>}/>
          <Route path="/EntryLevel_Xiaomi/:id" element={<ENTRYLEVEL_XIAOMI/>}/>
          
          <Route path="/EntryLevel_Realme" element={<ENTRYLEVEL_REALME/>}/>
          <Route path="/EntryLevel_Realme/:id" element={<ENTRYLEVEL_REALME/>}/>
          
          
          <Route path="/MidRange" element={<MidRange/>}/>
          <Route path="/MidRange/:id" element={<MidRange/>}/>
           
          <Route path="/MidRange_Vivo" element={<MIDRANGE_VIVO/>}/>
          <Route path="/MidRange_Vivo/:id" element={<MIDRANGE_VIVO/>}/>
          
          <Route path="/MidRange_Oppo" element={<MIDRANGE_OPPO/>}/>
          <Route path="/MidRange_Oppo/:id" element={<MIDRANGE_OPPO/>}/>

          <Route path="/MidRange_Samsung" element={<MIDRANGE_SAMSUNG/>}/>
          <Route path="/MidRange_Samsung/:id" element={<MIDRANGE_SAMSUNG/>}/>
          
          <Route path="/MidRange_Infinix" element={<MIDRANGE_INFINIX/>}/>
          <Route path="/MidRange_Infinix/:id" element={<MIDRANGE_INFINIX/>}/>
          
          <Route path="/MidRange_TecnoMobile" element={<MIDRANGE_TECNOMOBILE/>}/>
          <Route path="/MidRange_TecnoMobile/:id" element={<MIDRANGE_TECNOMOBILE/>}/>

          <Route path="/MidRange_Xiaomi"  element={<MIDRANGE_XIAOMI/>}/>
          <Route path="/MidRange_Xiaomi/:id"  element={<MIDRANGE_XIAOMI/>}/>
          
          <Route path="/MidRange_Motorola" element={<MIDRANGE_MOTOROLA/>}/>
          <Route path="/MidRange_Motorola/:id" element={<MIDRANGE_MOTOROLA/>}/>
          
          <Route path="/MidRange_Realme" element={<MIDRANGE_REALME/>}/>
          <Route path="/MidRange_Realme/:id" element={<MIDRANGE_REALME/>}/>
          
          
          <Route path="/Flagship" element={<FlagShip/>}/>
          <Route path="/Flagship/:id" element={<FlagShip/>}/>
          
          <Route path="*" element={<Page404/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
