import styles from "./Testimonials.module.css";
function Testimonials() {
  return (
    <section className={styles.container}>
      <div className={styles.gridBox}>
        <img src="../images/testimonial_img.jpg" alt="A table" />
        <div className={styles.testimony}>
          <h2>Listen to what other customers have to say!</h2>
          <p className={styles.testimonials_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque natus
            ducimus fugit doloribus quibusdam obcaecati eligendi corrupti? Quos
            aspernatur dolor repellendus nostrum quis veniam? Rem aliquam magnam
            quaerat veniam vel!
          </p>
          <p className={styles.author}>&mdash; CJ and Kaitlyn</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
