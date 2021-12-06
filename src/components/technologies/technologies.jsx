import styles from "./technologies.module.scss";

export default function Technologies(props) {
  return (
    <div id="technologies" className={styles.techWrapper}>
      <div className={styles.techContainer}>
        <div className={styles.techHeader}>
          <h2>Technologies</h2>
          <p>Technologies we can adapt to:</p>
        </div>
        <div className={styles.techs}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  {" "}
                  <i class={d.icon}></i>
                  <div>
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}
