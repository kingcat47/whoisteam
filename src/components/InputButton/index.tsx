import { useState } from "react";
import styled from "styled-components";
import styles from "./styles.module.scss";

interface InputProps {
  className?: string;
  placeholder?: string;
}

const InputItem = styled.input.attrs({
  type: "search",
  enterKeyHint: "search", //같이있길래 넣기 했는데 역할은 잘 모르겠음
})`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  border: none;
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
`;

function Input({ placeholder, className }: InputProps) {
  const [textvalue, setTextvalue] = useState("");
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // 키보드 내리기
      (document.activeElement as HTMLElement)?.blur();
    }
  };
  return (
    <div className={[styles.container, className].join(" ")}>
      <InputItem
        value={textvalue}
        onChange={(e) => setTextvalue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleSubmit}
      />
    </div>
  );
}

export default Input;
