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
          <Route path='/Graphit' element={<GlassKlinger />} />
          <Route path='/Other' element={<OtherPage />} />
          <Route path='/GlassSM' element={<GlassOne />} />
          <Route path='/GlassTW' element={<GlassTW />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
