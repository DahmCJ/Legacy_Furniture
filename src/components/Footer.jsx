import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer_box}>
        <div className={styles.social}>
          <h5>Get in touch with us!</h5>
          <div className={styles.social_links}>
            <img src="../images/instagram.png" alt="Instagram Logo" />
            <img src="../images/facebook.png" alt="Facebook Logo" />
            <img src="../images/twitter.png" alt="Facebook Logo" />

            <img />
          </div>
        </div>
        <div className={styles.contact}>
          <p href="dahmcj@gmail.com">someemail@gmail.com</p>
        </div>
      </div>
      <footer>Copyright &copy; 2023 by Dahm Designs.</footer>
    </>
  );
}

export default Footer;
