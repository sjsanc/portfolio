import React, { useState } from "react";
import "./style.scss";

import { MarkGithubIcon } from "@primer/octicons-react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import ReactIcon from "./assets/React.webp";
import TypescriptIcon from "./assets/typescript.jpeg";
import ImpsimCover from "./assets/impsim1.png";
import RisutoCover from "./assets/risuto.png";
import TicketCover from "./assets/ticketwidget.jpeg";
import PortalKey from "./assets/icon-trans.png";

import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [darkTheme, setTheme] = useState<boolean>(true);
  const [panel, setPanel] = useState<string>("about");

  const changePanel = (panel: string) => {
    setPanel(panel);
  };

  const handleThemeSwitch = () => {
    setTheme(!darkTheme);
  };

  const panels = ["about", "projects", "contact"];

  return (
    <div className={darkTheme ? "dark app" : "light app"}>
      <div className="wrapper">
        <header>
          <h1>SJSANC</h1>

          <div>
            <a href="https://github.com/sjsanc">
              <GitHubIcon fontSize="inherit" />
            </a>
            <a href="https://www.linkedin.com/in/steven-scheepers-72b45b131/">
              <LinkedInIcon fontSize="large" />
            </a>
            <ThemeSwitcher switcher={handleThemeSwitch} theme={darkTheme} />
          </div>
        </header>
        <main>
          <nav className="side-nav">
            <ul>
              {panels.map((panel) => (
                <li
                  id={panel}
                  onClick={() => {
                    changePanel(panel);
                  }}>
                  {panel}
                </li>
              ))}
            </ul>
          </nav>

          {panel == "about" && (
            <section className="about">
              <p>
                Hi. I'm a web developer from the UK.
                <br />
                <br />I like making things with lots of pointless mechanics and
                weird flavour text.
              </p>
            </section>
          )}

          {panel == "projects" && (
            <section className="main-grid">
              <div className="project">
                <a href="https://an-imperial-simulation.netlify.app">
                  <img src={ImpsimCover}></img>
                  <h2>An Imperial Simulation</h2>
                  <p>
                    A (WIP) incremental-style strategy game. Leans heavily on
                    Redux for state management.
                  </p>
                </a>
              </div>
              <div className="project">
                <a href="https://confident-sammet-b6edfe.netlify.app">
                  <img src={RisutoCover}></img>
                  <h2>
                    Risuto ·<span>リスト</span>
                  </h2>
                  <p>
                    A cool cryptocurrency dashboard pulling the CoinGecko REST
                    api.
                  </p>
                </a>
              </div>
              <div className="project">
                <a href="https://github.com/sjsanc/osticket-ticketwidget">
                  <img src={TicketCover}></img>
                  <h2>osTicket--TicketWidget</h2>
                  <p>
                    Userscript for managing custom ticket queues inside the
                    osTicket helpdesk software. Vanilla JS
                  </p>
                </a>
              </div>
            </section>
          )}

          {panel == "contact" && (
            <section className="contact">
              <p>
                Email me at:
                <br />
                sjsanc@protonmail.com
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
