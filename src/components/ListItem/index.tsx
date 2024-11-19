import SvgIcon from "../SvgIcon";
import styles from "./styles.module.scss";
import ArrowIcon from "../../assets/icon/arrow_forward.svg?react";
export default function ListItem() {
  return (
    <div className={styles.supperjjangjjangman}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.right}>
            <div className={styles.title}>SaveQuest</div>
            <div className={styles.text}>1학년 4반</div>
          </div>
          <div className={styles.left}>
            <div className={styles.text}>(4)</div>
            <SvgIcon
              width={16}
              height={16}
              icon={<ArrowIcon />}
              color={"#B5B5B5"}
            ></SvgIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
