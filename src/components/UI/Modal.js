import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <div className={styles["modal-content"]}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCancel}>Ok</Button>
        </footer>
      </div>
    </Card>
  );
};
const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay
      title={props.title}
      message={props.message}
      onCancel={props.onCancel}
    />,
    document.getElementById("overlay-root")
  );
};
export default Modal;
