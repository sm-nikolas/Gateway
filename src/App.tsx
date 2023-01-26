import "./App.css";
import CircleInfo from "./components/circle/index";
import CardButton from "./components/redirectCard";
import "./components/circle/index.css";
import "./components/redirectCard/index.css";
import { useRef } from "react";
import gitHub from "./assets/gitHub.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import Credits from "./components/credit";

function App() {
  const perfilElement = useRef<HTMLDivElement | null>(null);

  return (
    <div className="App">
      <div className="card">
        <div className="circle-figure">
          <CircleInfo element={perfilElement} />
        </div>
        <div className="buttons-card">
          <CardButton
            name="linkedin"
            perfilElement={perfilElement}
            style="div-border-hover-linkedin"
            description="LINKEDIN"
            icon={linkedin}
            link={
              "https://www.linkedin.com/in/nikolas-soares-moreira-b98362218"
            }
          />
          <CardButton
            name="gitHub"
            perfilElement={perfilElement}
            style="div-border-hover-gitHub"
            description="GITHUB"
            icon={gitHub}
            link="https://github.com/sm-nikolas"
          />
          <CardButton
            name="instagram"
            perfilElement={perfilElement}
            style="div-border-hover-instagram"
            description="INSTAGRAM"
            icon={instagram}
            link="https://instagram.com/sm.nikolas?igshid=NmQ2ZmYxZjA="
          />
        </div>
        <div className="credit">
          <Credits />
        </div>
      </div>
    </div>
  );
}

export default App;
