import styled, { css } from "styled-components";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import add_circleof from "../icon/whoisteam/add_circleof.png";
import add_circleon from "../icon/whoisteam/add_circleon.png";
import groupof from "../icon/whoisteam/groupof.png";
import groupon from "../icon/whoisteam/groupon.png";
import matchtableof from "../icon/whoisteam/matchtableof.png";
import matchtableon from "../icon/whoisteam/matchtableon.png";

const MostContainer = styled.div`
  display: flex;
  width: 393px;
  height: 66px;
  padding: 0px 30px;
  align-items: center;
  gap: 50px;
  flex-shrink: 0;
  border-top: 1px solid #e0e0e0;
  background: #fff;
`;
const NavibuttonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
`;

const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
`;
const ButtonText = styled.div<{ isActive: boolean }>`
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */

  color: ${(props) => (props.isActive ? "#2871ff" : "#222")};
`;

function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <MostContainer
        onClick={() => {
          navigate("/teambuilding");
        }}
      >
        <NavibuttonContainer>
          <ButtonImg
            src={pathname === "/teambuilding" ? groupon : groupof}
          ></ButtonImg>
          <ButtonText isActive={pathname === "/teambuilding"}>
            팀빌딩
          </ButtonText>
          <ButtonImg
            src={pathname === "/studentmanage" ? add_circleof : add_circleon}
          ></ButtonImg>
          <ButtonText isActive={pathname === "studentmanage"}>
            학생관리
          </ButtonText>
          <ButtonImg
            src={pathname === "matchtable" ? matchtableof : matchtableon}
          ></ButtonImg>
          <ButtonText isActive={pathname === "matchtable"}>대진표</ButtonText>
        </NavibuttonContainer>
      </MostContainer>
    </>
  );
}

export default Navigation;
