import PlusIcon from "../../assets/icon/plus.svg?react";
import { Button } from "../../components";
import styles from "./styles.module.scss";
import Input from "../../components/InputButton";
export default function StudentManage() {
  const list = [];

  return (
    <div className={styles.container}>
      <Input placeholder={"검색어를 입력해주세요"}></Input>
      <h1 className={styles.title}>현재 추가된{"\n"}학생 목록이에요</h1>

      <div className={styles.main}>
        {list.length == 0 && (
          <p className={styles.empty}>
            아직 추가된 학생이 없어요!{"\n"}지금 바로 추가해보세요!
          </p>
        )}
      </div>

      <Button icon={<PlusIcon />} className={styles.button} />
    </div>
  );
}
