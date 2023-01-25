import React from "react";
import "./index.css";
import "../circle/index.css";
import downloadIcon from "../../assets/downloadIcon.svg";
import { useEffect, useRef } from "react";

interface Props {
  name: string;
  perfilElement: any;
  style: string;
}

const CardButton = ({ name, perfilElement, style }: Props) => {
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function activeClass() {
      perfilElement.current?.classList.toggle(style);
    }

    element.current?.addEventListener("mouseenter", activeClass);
    element.current?.addEventListener("mouseleave", activeClass);

    return () => {
      element.current?.removeEventListener("mouseenter", activeClass);
      element.current?.removeEventListener("mouseleave", activeClass);
    };
  }, [element]);

  return (
    <div className="button" id={name} ref={element}>
      <div className="button-wrapper">
        <div className="text">Download</div>
        <div className="icon">
          <img src={downloadIcon} />
        </div>
      </div>
    </div>
  );
};

export default CardButton;
