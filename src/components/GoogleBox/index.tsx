import GoogleIcon from "../../assets/icon/google.svg?react";
import styles from "./styles.module.scss";
import SvgIcon from "../SvgIcon";

interface GoogleBoxProp {
  className?: string;
}

function GoogleBox({ className }: GoogleBoxProp) {
  return (
    <div className={[styles.container, className].join(" ")}>
      <SvgIcon color={"none"} icon={<GoogleIcon />} width={28} height={28} />
      <div className={styles.text}>Google로 시작하기</div>
    </div>
  );
}

export default GoogleBox;
