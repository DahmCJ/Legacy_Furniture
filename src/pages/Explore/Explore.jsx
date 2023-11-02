import NavBar from "../../components/PageNav/NavBar";
import styles from "./Explore.module.css";
import Footer from "../../components/Footer";
function Explore() {
  return (
    <>
      <NavBar />
      <main className={styles.explore}>
        <section>
          <h1>Explore our state of the art steel tables!</h1>
          <h2>
            A website full of steel tables for you to choose from. Get your
            dream table today!
          </h2>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Explore;
