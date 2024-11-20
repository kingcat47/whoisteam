import styles from "./styles.module.scss";
import { Button } from "../../components";
import Arrow_forwardIcon from "../../assets/icon/arrow_forward.svg?react";
import { useNavigate } from "react-router-dom";

export default function TeambuildingFirst() {
  const navigate = useNavigate();
  const handclick = () => {
    navigate("/teambuildingsecond");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>TeambuildingFirst</div>{" "}
        <Button
          icon={<Arrow_forwardIcon />}
          className={styles.button}
          onClick={handclick}
        />
      </div>
    </>
  );
}
