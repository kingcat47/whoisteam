import SvgIcon from "../SvgIcon";
import styles from "./styles.module.scss";
import ArrowIcon from "../../assets/icon/arrow_forward.svg?react";

interface ListItemProps {
  whatclass?: string;
  title?: string;
  many?: string;
}

export default function ListItem({ whatclass, title, many }: ListItemProps) {
  return (
    <div className={styles.supperjjangjjangman}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.right}>
            <div className={styles.title}>SaveQuest{title}</div>
            <div className={styles.text}>1학년 4반{whatclass}</div>
          </div>
          <div className={styles.left}>
            <div className={styles.text}>(4{many})</div>
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
