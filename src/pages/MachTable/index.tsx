import PlusIcon from "../../assets/icon/plus.svg?react";
import { Button } from "../../components";
import styles from "./styles.module.scss";
import Input from "../../components/InputButton";

export default function MachTable() {
  const list = [];

  return (
    <div className={styles.container}>
      <Input placeholder={"검색어를 입력해주세요"}></Input>
      <h1 className={styles.title}>대진표를 만들{"\n"}그룹을 선택해주세요</h1>

      <div className={styles.main}>
        {list.length == 0 && (
          <p className={styles.empty}>
            아직 추가된 그룹이 없어요!{"\n"}지금 바로 추가해보세요!
          </p>
        )}
      </div>

      <Button icon={<PlusIcon />} className={styles.button} />
    </div>
  );
}
