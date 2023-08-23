import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Portfolio from "../Components/Portfolio";
import { userData } from "../data/userData";

function Work() {
  return (
    <div>
      <Navigation />
      <Portfolio data={userData.portfolio} />
      <Footer data={userData.main} />
    </div>
  );
}

export default Work;
