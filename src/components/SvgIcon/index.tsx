import React, { ReactElement } from "react";

interface Props {
  icon: ReactElement; // ReactElement로 제한
  color: string;
  width?: number;
  height?: number;
}

export default function SvgIcon({
  icon,
  color,
  width,
  height,
}: Props): ReactElement {
  // icon에 스타일 적용
  const styledIcon = React.cloneElement(icon, {
    style: {
      fill: color,
      color: color,
      width: `${width}px`,
      height: height ? `${height}px` : "auto",
    },
  });

  return <>{styledIcon}</>;
}
