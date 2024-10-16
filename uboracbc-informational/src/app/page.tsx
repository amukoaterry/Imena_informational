import Features from "@/app/Features";
import Navbar from "@/app/Navbar";
import Homepage from "@/app/Homepage";
import About from "@/app/About";
import Team from "@/app/Team";


export default function Home() {
  return (
    <div>
       <Navbar/>
       <Homepage/>
      <Features/>
      <About/>
      <Team/>
    </div>
  );
}