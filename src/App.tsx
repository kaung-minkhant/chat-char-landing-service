import "@/App.css";
import Banner from "@components/Banner";
import Contact from "@components/Contact";
import Divider from "@components/Divider";
import Features from "@components/Features";
import Mission from "@components/Mission";
import Navbar from "@components/Navbar";
import Typography from "@ui/Typography";

function App() {
  return (
    <div className="bg-background relative overflow-clip flex flex-col justify-start items-center">
      <div className="left-0 top-[100px] w-[100vw] h-[800px] absolute  z-0 stars"></div>
      {/* <div className="left-0 top-[100px] w-[100vw] h-[800px] absolute   z-0 twinkling"></div> */}
      <div className=" relative w-[100vw] z-10">
        <Navbar />
      </div>
      <div className="mt-20 max-w-[1100px] app-padding z-10">
        <Banner />
      </div>
      <div className="mt-36 sm:mt-52 app-padding z-10">
        <Mission />
      </div>
      <div className="w-full mt-36 sm:mt-52 z-10">
        <Divider height="2px" gap="40px" />
      </div>
      <div className="mt-10 w-full app-padding z-10">
        <Features />
      </div>
      <div className="mt-36 sm:mt-44 lg:mt-52 relative w-full flex justify-center app-padding z-10">
        <Contact />
      </div>
{/* -mb-[2.3rem] sm:-mb-[4.2rem] mmd:-mb-[5rem] lg:-mb-[7rem] xl:-mb-[8rem] 2xl:-mb-[9rem] */}
      <div className="mt-32  h-fit w-[100vw] text-center z-10">
        <Typography
          fontStyles="font-graphikbold"
          sizeStyles="text-[5.5rem] sm:text-[8.8rem] md:text-[10rem] mmd:text-[11.5rem] lg:text-[14rem] mlg:text-[16rem] xl:text-[17.5rem] 2xl:text-[21rem]"
          className="footer select-none"
        >
          COPILOT
        </Typography>
      </div>
      <div className=" pb-8 flex flex-row items-center gap-10 select-none">
        <Typography>© {new Date().getFullYear()} Digital Copilot</Typography>
        <Typography className="cursor-pointer"><a target="_blank" href="https://api.digitalcopilot.ai/setup/terms.html" className="cursor-pointer">Terms and condition</a></Typography>
        <Typography><a target="_blank" href="https://api.digitalcopilot.ai/setup/PrivacyAndPolicy.html">Privacy Policy</a></Typography>
      </div>
    </div>
  );
}

export default App;
