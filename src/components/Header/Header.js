import Button from "../UI/Button";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Button className={styles.logoutbtn} onClick={props.logout}>
        Logout
      </Button>
    </header>
  );
};
export default Header;
