import BackIcon from "../../assets/icon/back.svg?react";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  className?: string;
}

function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className={className}
      >
        <SvgIcon icon={<BackIcon />} color={"#1c1b1f"} width={24} height={24} />
      </div>
    </>
  );
}

export default BackButton;
