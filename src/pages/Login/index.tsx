import SvgIcon from "../../components/SvgIcon";
import styles from "./styles.module.scss";
import LogoIcon from "../../assets/icon/logo.svg?react";
import { GoogleBox } from "../../components";

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <SvgIcon icon={<LogoIcon />} color={"#2871FF"}></SvgIcon>
        <h1 className={styles.title}>팀 관리를{"\n"}Mixir앱 하나로</h1>
      </div>
      <div className={styles.google}>
        <GoogleBox />
      </div>
    </>
  );
}
