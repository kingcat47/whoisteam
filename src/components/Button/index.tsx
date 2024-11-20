import styles from "./styles.module.scss";
import React from "react";
import SvgIcon from "../SvgIcon";

interface ButtonProps {
  icon: React.ReactElement; //이거는 왜 :?안됌?
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  icon,
  text,
  onClick,
  className,
}: ButtonProps) {
  return (
    <div className={[styles.container, className].join(" ")} onClick={onClick}>
      {text && <p>{text}</p>}
      <SvgIcon icon={icon} color={"#fff"} width={28} height={28} />
    </div>
  );
}
