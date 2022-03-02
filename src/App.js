import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import CreateAnnounce from './components/CreateAnnounce';
import AnnounceList from './components/AnnounceList';
import ViewAnnounce from './components/ViewAnnounce';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="probootstrap-page-wrapper">
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/save" element={<CreateAnnounce/>}/>
            <Route path="/all" element={<AnnounceList/>}/>
            <Route path="/announce/:id" element={<ViewAnnounce/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
