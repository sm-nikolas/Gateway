import "./App.css";
import CircleInfo from "./components/circle/index";
import CardButton from "./components/redirectCard";
import imgPerfil from "./assets/imgPerfil.png";
import downloadIcon from "./assets/downloadIcon.svg";
import "./components/circle/index.css";
import "./components/redirectCard/index.css";
import { useEffect, useRef } from "react";

function App() {
  const element1 = useRef<HTMLDivElement | null>(null);
  const element2 = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   function teste(e: Event) {
  //     let elementChildren;
  //     const lengthChildren = element2.current?.children.length || 0;

  //     for (let index = 0; index < lengthChildren; index++) {
  //       debugger;
  //       if (element2.current?.children[index].className.includes("active")) {
  //         elementChildren = element2.current?.children[index];
  //       }
  //     }
  //     console.log(elementChildren);
  //     switch (element2.current?.id) {
  //       case "a":
  //         element1.current?.classList.toggle("div-border-hover-a");
  //         break;
  //       case "b":
  //         element1.current?.classList.toggle("div-border-hover-b");
  //         break;
  //       default:
  //         break;
  //     }
  //   }

  //   element2.current?.addEventListener("mouseenter", teste);
  //   element2.current?.addEventListener("mouseleave", teste);

  //   return () => {
  //     element2.current?.removeEventListener("mouseenter", teste);
  //     element2.current?.removeEventListener("mouseleave", teste);
  //   };
  // }, [element2]);

  return (
    <div className="App">
      <div className="card">
        <CircleInfo element={element1} />
        <div className="buttons-card" ref={element2}>
          <CardButton
            name="a"
            perfilElement={element1}
            style="div-border-hover-a"
          />
          <CardButton
            name="b"
            perfilElement={element1}
            style="div-border-hover-b"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
