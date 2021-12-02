import styles from "./about.module.scss";

export default function About(props) {
  return (
    <div id="about">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContainer}>
          <div>
            {" "}
            <img src="img/about.jpg" className={styles.image} alt="" />{" "}
          </div>
          <div>
            <div className={styles.aboutTextContainer}>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div>
                <div>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
