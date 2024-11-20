import { useNavigate } from "react-router-dom";
import PlusIcon from "../../assets/icon/plus.svg?react";
import { Button } from "../../components";
import styles from "./styles.module.scss";

export default function TeamBuilding() {
  const list = [];
  const navigate = useNavigate();

  const handclick = () => {
    navigate("/teambuilding/1");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        현재 만들어진{"\n"}전체 팀빌딩 목록이에요
      </h1>

      <div className={styles.main}>
        {list.length == 0 && (
          <p className={styles.empty}>
            아직 만들어진 팀빌딩이 없어요!{"\n"}지금 바로 만들어보세요!
          </p>
        )}
      </div>

      <Button
        icon={<PlusIcon />}
        className={styles.button}
        onClick={handclick}
      />
    </div>
  );
}
