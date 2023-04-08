import HomePage from './Page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ContactPage from './Page/ContactPage';
import CompanyPage from './Page/CompanyPage';
import DocumentPage from './Page/DocumentPage';
import TransferPage from './Page/TransferPage';
import TransferThree from './Components/TransferPage/TransferThree';
import TransferTwo from './Components/TransferPage/TransferTwo';
import TransferOne from './Components/TransferPage/TransferOne';
import PriceSmog from './Components/Price/Other/MICA SMOG/PriceSmog';
import Paronite from './Components/Price/Other/Paronite gaskets/Paronite';
import Graphite from './Components/Price/Other/Graphite gaskets/Graphite';
import GlassTubeSL from './Components/Price/Glass/Glass tube SL 97-1/GlassTubeSL';
import PriceG from './Components/Price/PriceG';
import OtherPage from './Components/Price/Other/OtherPage';
import GlassOne from './Components/Price/Glass/GlassOne';
import GlassTW from './Components/Price/GlassTW/GlassTW';
import GlassDurens from './Components/Price/Glass/Стекло Дюренса гладкое/GlassDurens';
import GlassKlinger from './Components/Price/Glass/Стекло Клингера рифленое/GlassKlinger';
import GlassTypeB from './Components/Price/Glass/Стекло закаленное тип Б круглое/GlassTypeB';
import GlassTypeB2 from './Components/Price/Glass/Стекло закаленное тип Б прямоугольное/GlassTypeB2';
import GlassSIZ from './Components/Price/Glass/Стекло СИЗ круглое/GlassSIZ';
import GlassTypeA from './Components/Price/Glass/Стекло смотровое незакаленное тип А/GlassTypeA';
import GlassElc from './Components/Price/Glass/Стекло электрообогревное для морских судов/GlassElc';
import GlassDin from './Components/Price/Glass/Стекло DIN 7080/GlassDin';
import GlassC37 from './Components/Price/Glass/Glass tube C37-2/GlassC37';
import SudEl from './Components/Price/Glass/Судовой иллюминатор/SudEl';
import TrubkaKvarc from './Components/Price/GlassTW/Трубка кварцевая/TrubkaKvarc';
import SterjenKvarc from './Components/Price/GlassTW/Стержень кварцевый/SterjenKvarc';
import StekloKvarc from './Components/Price/GlassTW/Стекло кварцевое смотровое/StekloKvarc';
import StekloKvarc2 from './Components/Price/GlassTW/Стекло кварцевое прямоугольное/StekloKvarc2';
import NakonKvarc from './Components/Price/GlassTW/Наконечник кварцевый/NakonKvarc';
import TankEq from './Components/Price/TANK EQUIPMENT/TankEq';
import FireFuses from './Components/Price/TANK EQUIPMENT/Предохранители огневые';
import PredOgne from './Components/Price/TANK EQUIPMENT/Предохранители огневые/PredohOgneKomm/PredOgne';
import OP50 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP50/OP50';
import OP100 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP100/OP100';
import OP300 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP300/OP300';
import OP200 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP200/OP200';
import OP500 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP500/OP500';
import OGJ from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OGJ/OGJ';
import OP80 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP80/OP80';
import OP150 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP150/OP150';
import OP250 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP250/OP250';
import OP350 from './Components/Price/TANK EQUIPMENT/Предохранители огневые/OP350/OP350';
import PL from './Components/Price/TANK EQUIPMENT/Предохранители огневые/PL/PL';
import MC2H from './Components/Price/TANK EQUIPMENT/EquipmentP/MC2H/MC2H';
import EquipmentP from './Components/Price/TANK EQUIPMENT/EquipmentP/EquipmentP';
import OK80 from './Components/Price/TANK EQUIPMENT/EquipmentP/OK80/OK80';
import YC80 from './Components/Price/TANK EQUIPMENT/EquipmentP/YC80/YC80';
import KS80 from './Components/Price/TANK EQUIPMENT/EquipmentP/KS80/KS80';
import OH80 from './Components/Price/TANK EQUIPMENT/EquipmentP/OH80/OH80';
import LukRez from './Components/Price/TANK EQUIPMENT/LukRez/LukRez';
import LukLight from './Components/Price/TANK EQUIPMENT/LukRez/LukLight/LukLight';
import LukLaz from './Components/Price/TANK EQUIPMENT/LukRez/LukLaz/LukLaz';
import LukZam from './Components/Price/TANK EQUIPMENT/LukRez/LukZam/LukZam';
import DuhKlap from './Components/Price/TANK EQUIPMENT/DuhKlap/DuhKlap';
import KDM50 from './Components/Price/TANK EQUIPMENT/DuhKlap/KDM50/KDM50';
import KDM50m from './Components/Price/TANK EQUIPMENT/DuhKlap/KDM50m/KDM50m';
import KDM150 from './Components/Price/TANK EQUIPMENT/DuhKlap/KDM150/KDM150';
import KDM200 from './Components/Price/TANK EQUIPMENT/DuhKlap/KMD200/KMD200';
import KDC1500 from './Components/Price/TANK EQUIPMENT/DuhKlap/KDC1500/KDC1500';
import KDC3000 from './Components/Price/TANK EQUIPMENT/DuhKlap/KDC3000/KDC3000';
import KDC1500K from './Components/Price/TANK EQUIPMENT/DuhKlap/KDC1500K/KDC1500K';
import KDC1500M from './Components/Price/TANK EQUIPMENT/DuhKlap/KDC1500M/KDC1500M';
import KDC3000K from './Components/Price/TANK EQUIPMENT/DuhKlap/KDC3000K/KDC3000K';
import NDKM from './Components/Price/TANK EQUIPMENT/DuhKlap/NDKM/NDKM';
import SMDK from './Components/Price/TANK EQUIPMENT/DuhKlap/SMDK/SMDK';
import KDZT from './Components/Price/TANK EQUIPMENT/DuhKlap/KDZT/KDZT';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/document' element={<DocumentPage />} />
          <Route path='/transfer' element={<TransferPage />} />
          <Route path='/transferOne' element={<TransferOne />} />
          <Route path='/transferTwo' element={<TransferTwo />} />
          <Route path='/transferThree' element={<TransferThree />} />
          <Route path='/Price' element={<PriceG />} />
          <Route path='/Graphit' element={<SudEl />} />
          <Route path='/Other' element={<OtherPage />} />
          <Route path='/StekloSmotrovoe' element={<GlassOne />} />
          <Route path='/StekloSmotrovoe/Steklo-C37-2' element={<GlassC37 />} />
          <Route path='/StekloSmotrovoe/Steklo-SL97' element={<GlassTubeSL />} />
          <Route path='/StekloSmotrovoe/Steklo-DIN' element={<GlassDin />} />
          <Route path='/StekloSmotrovoe/Steklo-Durens' element={<GlassDurens />} />
          <Route path='/StekloSmotrovoe/Steklo-TypeB' element={<GlassTypeB />} />
          <Route path='/StekloSmotrovoe/Steklo-TypeB2' element={<GlassTypeB2 />} />
          <Route path='/StekloSmotrovoe/Steklo-Klingera' element={<GlassKlinger />} />
          <Route path='/StekloSmotrovoe/Steklo-SIZ' element={<GlassSIZ />} />
          <Route path='/StekloSmotrovoe/Steklo-TypeA' element={<GlassTypeA />} />
          <Route path='/StekloSmotrovoe/Steklo-ELC' element={<GlassElc />} />
          <Route path='/StekloSmotrovoe/Steklo-sudoEL' element={<SudEl />} />
          <Route path='/StekloKvarc' element={<GlassTW />} />
          <Route path='/StekloKvarc/TrubkaKvarc' element={<TrubkaKvarc />} />
          <Route path='/StekloKvarc/SterjenKvarc' element={<SterjenKvarc />} />
          <Route path='/StekloKvarc/StekloKvarc' element={<StekloKvarc />} />
          <Route path='/StekloKvarc/StekloKvarc2' element={<StekloKvarc2 />} />
          <Route path='/StekloKvarc/NakonKvarc' element={<NakonKvarc />} />
          <Route path='/TankQ' element={<TankEq />} />
          <Route path='/TankQ/FireF' element={<FireFuses />} />
          <Route path='/TankQ/FireF/12' element={<PredOgne />} />
          <Route path='/TankQ/FireF/11' element={<OP50 />} />
          <Route path='/TankQ/FireF/10' element={<OP100 />} />
          <Route path='/TankQ/FireF/9' element={<OP300 />} />
          <Route path='/TankQ/FireF/8' element={<OP200 />} />
          <Route path='/TankQ/FireF/7' element={<OP500 />} />
          <Route path='/TankQ/FireF/6' element={<OGJ />} />
          <Route path='/TankQ/FireF/5' element={<OP80 />} />
          <Route path='/TankQ/FireF/4' element={<OP150 />} />
          <Route path='/TankQ/FireF/3' element={<OP250 />} />
          <Route path='/TankQ/FireF/2' element={<OP350 />} />
          <Route path='/TankQ/FireF/1' element={<PL />} />
          <Route path='/TankQ/EquipmentP/5' element={<MC2H />} />
          <Route path='/TankQ/EquipmentP' element={<EquipmentP />} />
          <Route path='/TankQ/EquipmentP/4' element={<OK80 />} />
          <Route path='/TankQ/EquipmentP/3' element={<YC80 />} />
          <Route path='/TankQ/EquipmentP/2' element={<KS80 />} />
          <Route path='/TankQ/EquipmentP/1' element={<OH80 />} />
          <Route path='/TankQ/LukRez' element={<LukRez />} />
          <Route path='/TankQ/LukRez/3' element={<LukLight />} />
          <Route path='/TankQ/LukRez/2' element={<LukLaz />} />
          <Route path='/TankQ/LukRez/1' element={<LukZam />} />
          <Route path='/TankQ/DuhKlap' element={<DuhKlap />} />
          <Route path='/TankQ/DuhKlap/1' element={<KDM50 />} />
          <Route path='/TankQ/DuhKlap/2' element={<KDM50m />} />
          <Route path='/TankQ/DuhKlap/3' element={<KDM150 />} />
          <Route path='/TankQ/DuhKlap/4' element={<KDM200 />} />
          <Route path='/TankQ/DuhKlap/5' element={<KDC1500 />} />
          <Route path='/TankQ/DuhKlap/6' element={<KDC3000 />} />
          <Route path='/TankQ/DuhKlap/7' element={<KDC1500K />} />
          <Route path='/TankQ/DuhKlap/8' element={<KDC1500M />} />
          <Route path='/TankQ/DuhKlap/9' element={<KDC3000K />} />
          <Route path='/TankQ/DuhKlap/10' element={<NDKM />} />
          <Route path='/TankQ/DuhKlap/11' element={<SMDK />} />
          <Route path='/TankQ/DuhKlap/12' element={<KDZT />} />
          <Route path='/Other/1' element={<Graphite />} />
          <Route path='/Other/2' element={<Paronite />} />
          <Route path='/Other/3' element={<PriceSmog />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
