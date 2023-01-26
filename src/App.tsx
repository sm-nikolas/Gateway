import "./App.css";
import CircleInfo from "./components/circle/index";
import CardButton from "./components/redirectCard";
import "./components/circle/index.css";
import "./components/redirectCard/index.css";
import { useRef } from "react";
import gitHub from "./assets/gitHub.svg"
import instagram from "./assets/instagram.svg"
import linkedin from "./assets/linkedin.svg"


function App() {
  const element1 = useRef<HTMLDivElement | null>(null);
  const element2 = useRef<HTMLDivElement | null>(null);

  return (
    <div className="App">
      <div className="card">
        <div className="circle-figure">
        <CircleInfo element={element1} />
        </div>
        <div className="div-infos">
          
        </div>
        <div className="buttons-card" ref={element2}>
          <CardButton
            name="linkedin"
            perfilElement={element1}
            style="div-border-hover-linkedin"
            description="LINKEDIN"
            icon={linkedin}
          />
          <CardButton
            name="gitHub"
            perfilElement={element1}
            style="div-border-hover-gitHub"
            description="GITHUB"
            icon={gitHub}
          />
          <CardButton
            name="instagram"
            perfilElement={element1}
            style="div-border-hover-instagram"
            description="INSTAGRAM"
            icon={instagram}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
