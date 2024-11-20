import Arrow_forwardIcon from "../../assets/icon/arrow_forward.svg?react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Button } from "../../components";

export default function MachTableSecond() {
  const navigate = useNavigate();

  const handclick = () => {
    navigate("/matchTable");
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>아래와 같이{"\n"}대진표가 만들어졌어요</h1>

        <div className={styles.main}>
          <Button
            text={"완료"}
            icon={<Arrow_forwardIcon />}
            className={styles.button}
            onClick={handclick}
          />
        </div>
      </div>
    </>
  );
}
