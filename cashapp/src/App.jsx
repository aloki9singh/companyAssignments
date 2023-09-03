
import Banking from "./Pages/Banking";
import Boost from "./Pages/Cash Card & Boost";
import FooterMobile from "./Pages/footerMobile";
import Hero from "./Pages/Hero Section";
import Investing from "./Pages/Investing";
import Payments from "./Pages/Payments";


function App() {
  return (
    <>
    
      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 smlap:hidden ">
        <Hero />
        <Payments />
        <Banking />
        <Boost />
        <Investing />
      </div>
      <div className="snap-y snap-mandatory h-[100vh] overflow-y-scroll m-0 revsmlap:hidden">
        <Hero />
        <Payments />
        <Banking />
        <Boost />
        <Investing/>
        <FooterMobile/>
      </div>
    </>
  );
}

export default App;
