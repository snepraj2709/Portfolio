import Footer from "../Components/Footer";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills/Skills";
import About from "../Components/About";
import { userData } from "../data/userData";
import Navigation from "../Components/Navigation";

function UserDetails() {
  return (
    <div>
      <Navigation />
      <About data={userData.main} />
      <Resume />
      <Skills />
      <Footer data={userData.main} />
    </div>
  );
}

export default UserDetails;
