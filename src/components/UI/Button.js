import styles from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <button
      className={`${styles.btn} ${props.className}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};
export default Button;
