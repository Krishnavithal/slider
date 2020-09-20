import React from "react";
import "./App.css";
import HomeComponent from "./components/home";

class App extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper" style={{ backgroundColor: "white" }}>
            <a href="#" className="brand-logo" style={{ color: "black" }}>
              SwiftLearn
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li style={{ overflow: "hidden" }}>
                <a
                  href="sass.html"
                  style={{ color: "black", overflow: "hidden" }}
                >
                  <div>
                    Upcoming{" "}
                    <span style={{ color: "#ec7d67  " }}>
                      (<i class="fa fa-circle fa" aria-hidden="true"></i>)
                    </span>
                  </div>
                  {/* Live Consultation */}
                </a>
                {/* <ul style={{ color: "black" }}>
                  <li>Upcoming</li>
                  <li>Live Consultation</li>
                </ul> */}
              </li>
              <li>
                <a href="badges.html" style={{ color: "black" }}>
                  Buy Plans
                </a>
              </li>
              <li>
                <a href="collapsible.html" style={{ color: "black" }}>
                  View Plans
                </a>
              </li>
              <li>
                <button
                  href="https://www.pluralsight.com/pricing/skills"
                  style={{
                    minWidth: "100px",
                    borderRadius: "20px",
                    minHeight: "20px",
                    padding: "10px 40px 10px 40px",
                    color: "white",
                  }}
                  className="button  button--gradient"
                >
                  Log In
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <HomeComponent default={0} />
      </>
    );
  }
}

export default App;
