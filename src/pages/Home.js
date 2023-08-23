import Footer from "../Components/Footer";
import { userData } from "../data/userData";
import Contact from "../Components/Contact";
import Navigation from "../Components/Navigation";
import HomeBanner from "../Components/HomeBanner";

function Home() {
  return (
    <div>
      <Navigation />
      <HomeBanner data={userData.main} />
      <Contact data={userData.main} />
      <Footer data={userData.main} />
    </div>
  );
}

export default Home;
