import styles from "./Features.module.css";
function Features() {
  return (
    <>
      <section className={styles.features_container}>
        <h2 className={styles.features_title}>
          What sets us apart from the others
        </h2>
        <div className={styles.features_box}>
          <div className={styles.box}>
            <img src="../images/usa.png" alt="usa Icon" />
            <h4>Made in the USA</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
              nam aperiam cumque ipsa. Ullam quas, dicta voluptate, officiis, id
              delectus dignissimos pariatur eaque deserunt vel labore quae velit
              nostrum.
            </p>
          </div>
          <div className={styles.box}>
            <img src="../images/construction.png" alt="usa Icon" />
            <h4>A Steel Frame for quality</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
              nam aperiam cumque ipsa. Ullam quas, dicta voluptate, officiis, id
              delectus dignissimos pariatur eaque deserunt vel labore quae velit
              nostrum.
            </p>
          </div>
          <div className={styles.box}>
            <img src="../images/satisfaction.png" alt="usa Icon" />
            <h4>Satisfaction guaranteed</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
              nam aperiam cumque ipsa. Ullam quas, dicta voluptate, officiis, id
              delectus dignissimos pariatur eaque deserunt vel labore quae velit
              nostrum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
