import Footer from "../Components/Footer";
import { userData } from "../data/userData";
import Contact from "../Components/Contact";
import Navigation from "../Components/Navigation";
import HomeBanner from "../Components/HomeBanner";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills/Skills";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";

function Home() {
  return (
    <div>
      <Navigation />
      <HomeBanner data={userData.main} />
      <About data={userData.main} />
      <Resume />
      <Skills />
      <Portfolio data={userData.portfolio} />
      <Contact data={userData.main} />
      <Footer data={userData.main} />
    </div>
  );
}

export default Home;
