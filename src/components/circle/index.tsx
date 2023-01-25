import imgPerfil from "../../assets/imgPerfil.png";
import "./index.css";

interface Props {
  element: any;
}

function CircleInfo({ element }: Props) {
  return (
    <div className="div-border" ref={element}>
      <img src={imgPerfil} className="imgPerfil" />
    </div>
  );
}

export default CircleInfo;
