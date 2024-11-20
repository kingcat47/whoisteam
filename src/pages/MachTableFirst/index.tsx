import Card from "../../components/Card";
import Solo from "../../assets/icon/solo.svg?react";
import Cuple from "../../assets/icon/cuple.svg?react";
import Arrow_forwardIcon from "../../assets/icon/arrow_forward.svg?react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Button } from "../../components";
import { useState } from "react";

type Mode = "solo" | "cuple";

export default function MachTableFirst() {
  const navigate = useNavigate();
  const [select, setselect] = useState("");

  const getCardClassName = (mode: Mode) => {
    return `${styles.card} ${select === mode ? styles.active : ""}`;
  };

  const handclickcard = (mode: Mode) => {
    setselect(select === mode ? "" : mode);
  };

  const handclick = () => {
    navigate("/machtable2");
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>단식,복식을{"\n"}선택해주세요</h1>

        <div className={styles.main}>
          <Card
            className={getCardClassName("solo")}
            icon={<Solo />}
            text={"단식"}
            onClick={() => handclickcard("solo")}
          />
          <Card
            className={getCardClassName("cuple")}
            icon={<Cuple />}
            text={"복식"}
            onClick={() => handclickcard("cuple")}
          />
          <Button
            text={"대진표 짜기"}
            icon={<Arrow_forwardIcon />}
            className={styles.button}
            onClick={handclick}
          />
        </div>
      </div>
    </>
  );
}
