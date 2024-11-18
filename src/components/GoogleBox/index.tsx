import GoogleIcon from "../../assets/icon/google.svg?react";
import styles from "./styles.module.scss";
import SvgIcon from "../SvgIcon";

function GoogleBox() {
  return (
    <div className={styles.container}>
      <SvgIcon color={"none"} icon={<GoogleIcon />} width={28} height={28} />
      <div>Google Login</div>
    </div>
  );
}

export default GoogleBox;
