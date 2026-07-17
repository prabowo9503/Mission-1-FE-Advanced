import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from "./Components/Navbar"
import FeaturedContents from "./Components/FeaturedContents"
import ContinueToWatch from './Components/ContinueToWatch'
import TopRating from './Components/TopRating';
import FilmTrending from './Components/FilmTrending'
import NewRelease from './Components/NewRelease'
import Footer from './Components/Footer';

import "./Style/LandingPage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
      <NavigationBar />
      <FeaturedContents />
      <ContinueToWatch />
      <TopRating />
      <FilmTrending />
      <NewRelease />
      <Footer />
      </div>
      {/* end of intro */}
    </div>
  );
}

export default App;
