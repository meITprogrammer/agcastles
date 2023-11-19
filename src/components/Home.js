import '../App.css';
import Navigationbar from "./Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Heading from './Heading';
import About from './About';
import Footers from './Footers';



function Home() {

  return (
    <div>
      <Navigationbar />
      <Heading />
      <About />
      <Footers />
    </div>
     
  );
}

export default Home;