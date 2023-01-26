import React from "react";
import "./index.css";
import "../circle/index.css";
import downloadIcon from "../../assets/downloadIcon.svg";
import { useEffect, useRef } from "react";

interface Props {
  name: string;
  perfilElement: any;
  style: string;
  description: string;
  icon: string;
  link: string;
}

const CardButton = ({
  name,
  perfilElement,
  style,
  description,
  icon,
  link,
}: Props) => {
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

  const handlePageLink = () => {
    setTimeout(() => {
      window.open(link);
    }, 550);
  };

  return (
    <div className="button" role="button" id={name} ref={element}>
      <div className="button-wrapper" onClick={() => handlePageLink()}>
        <div className="text">{description}</div>
        <div className="icon">
          <img src={icon} />
        </div>
      </div>
    </div>
  );
};

export default CardButton;
