import styles from "./team.module.scss";

export default function Team(props) {
  return (
    <div id="team" className="text-center">
      <div className={styles.container}>
        <div className="section-title">
          <h2>Meet the Team</h2>
        </div>
        <div className={styles.imagesContainer}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className={styles.imageDataContainer}>
                    {" "}
                    <div className={styles.imageContainer}>
                      <img src={d.img} alt="..." className={styles.teamImage} />
                    </div>
                    <div>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <a rel="noreferrer" target="_blank" href={d.linkedIn}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}
