import styles from "./styles.module.scss";
import { Button } from "../../components";
import Arrow_forwardIcon from "../../assets/icon/arrow_forward.svg?react";
import { useNavigate } from "react-router-dom";

export default function TeambuildingSecond() {
  const navigate = useNavigate();
  const handclick = () => {
    navigate("/teamBuilding");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>TeambuildingSecond</div>{" "}
        <Button
          text={"저장하기"}
          icon={<Arrow_forwardIcon />}
          className={styles.button}
          onClick={handclick}
        ></Button>
      </div>
    </>
  );
}
