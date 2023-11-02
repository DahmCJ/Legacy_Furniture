import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/PageNav/NavBar";
import Testimonials from "../../components/Testimonials";
import styles from "./Homepage.module.css";
function Homepage() {
  return (
    <>
      <NavBar />
      <main className={styles.homepage}>
        <Header />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default Homepage;
