import { useEffect, useState } from "react";
import styles from "./navigation.module.scss";
// import logo from "../../img/kandraLogo.jpg";

export default function Navigation(props) {
  const [scrollPosition, setScrollPosition] = useState();
  const [deploy, setDeploy] = useState();

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.navWrapper} id="home">
      <a href="#home">
        <img src={"img/kandraLogo.png"} alt="Kandra Logo" />
      </a>
      <div
        className={
          styles.topNav +
          (scrollPosition > 100 ? ` ${styles.whitetopNav}` : ``) +
          (deploy ? ` ${styles.responsive}` : ``)
        }
      >
        <a href="#contact" onClick={() => setDeploy(!deploy)}>
          Contact
        </a>
        <a href="#team" onClick={() => setDeploy(!deploy)}>
          Team
        </a>
        <a href="#services" onClick={() => setDeploy(!deploy)}>
          Services
        </a>
        <a href="#about" onClick={() => setDeploy(!deploy)}>
          About
        </a>
        <a href="#features" onClick={() => setDeploy(!deploy)}>
          Why us?
        </a>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={() => setDeploy(!deploy)}
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
