import SvgIcon from "../SvgIcon";
import styles from "./styles.module.scss";

interface CardProps {
  icon: React.ReactElement;
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function Card({ icon, text, onClick, className }: CardProps) {
  return (
    <div className={[styles.container, className].join(" ")} onClick={onClick}>
      <SvgIcon icon={icon} color={"#949494"} width={70} height={70} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
