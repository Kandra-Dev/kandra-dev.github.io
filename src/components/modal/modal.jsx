import styles from "./modal.module.scss";

export default function Modal({ state, handleModalClose }) {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalContainer}>
        {state === "OK" ? (
          <>
            <h2>Success!</h2>
            <p>
              Our team got your message and will email you a response shortly.
            </p>
          </>
        ) : (
          <>
            <h2>Something went wrong!</h2>
            <p>Please, check the email adress is valid or try again later.</p>
          </>
        )}
        <button
          type="button"
          className="btn-custom"
          onClick={() => handleModalClose()}
        >
          {state === "OK" ? "Awesome" : "I'll try later"}
        </button>
      </div>
    </div>
  );
}
