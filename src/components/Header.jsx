import styles from "./Header.module.css";
function Header() {
  return (
    <section className={styles.header}>
      <div>
        <h1>
          You need a desk
          <br />
          We will build one for you
        </h1>
        <p>
          A website full of steel tables for you to choose from. Get your dream
          table today!
        </p>
      </div>
      <div>
        <img src="../images/header_img.jpg" alt="table"></img>
      </div>
    </section>
  );
}

export default Header;
