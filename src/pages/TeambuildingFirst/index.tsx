import styles from "./styles.module.scss";
import { Button, InputButton } from "../../components";
import Arrow_forwardIcon from "../../assets/icon/arrow_forward.svg?react";
import { useNavigate } from "react-router-dom";

export default function TeambuildingFirst() {
  const navigate = useNavigate();
  const handclick = () => {
    navigate("/teambuilding/2");
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          정보를 기입하여{"\n"}팀 빌딩을 완료해주세요
        </h1>
        <div className={styles.main}>
          <div className={styles.input_of_name}>
            <p className={styles.text}>팀빌딩 이름</p>
            <InputButton placeholder={"팀 이름을 입력해주세요"} />
          </div>
          <div className={styles.howmany}>
            {/* 권지원이 무슨 피커?한다함 */}
          </div>
        </div>
        <Button
          icon={<Arrow_forwardIcon />}
          className={styles.button}
          onClick={handclick}
        />
      </div>
    </>
  );
}
