import React from "react";
import M from "materialize-css";
import "../App.css";

class HomeComponent extends React.Component {
  instances;
  constructor(props) {
    super(props);
    this.state = {
      default: 0,
      cards: [
        { img: "https://lorempixel.com/250/250/nature/1", class: 5 },
        { img: "https://lorempixel.com/250/250/nature/1", class: 6 },
        { img: "https://lorempixel.com/250/250/nature/1", class: 7 },
        { img: "https://lorempixel.com/250/250/nature/1", class: 8 },
        { img: "https://lorempixel.com/250/250/nature/1", class: 9 },
      ],
    };
  }
  handleClick = (ind) => {
    console.log(ind);
    var activeDivs = document.getElementsByClassName("activeNumber");
    console.log(document.getElementsByClassName("activeNumber"));
    if (activeDivs.length !== 0) {
      activeDivs[0].className = "classNumber";
    }
    var divs = document.getElementsByClassName("classNumber");
    console.log(document.getElementsByClassName("classNumber"));
    if (divs.length !== 0) {
      divs[ind - 5].className = "classNumber activeNumber";
    }
    var instance = M.Carousel.getInstance(
      document.getElementsByClassName("carousel")[0]
    );
    this.setState({ default: ind - 5 }, () => {
      instance.set(this.state.default);
    });
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems);

      //   window.next = function () {
      //     var el = document.querySelector(".carousel");
      //     this.props.l = M.Carousel.getInstance(el);
      //     //l.next(1);
      //   };
    });
  }
  render() {
    return (
      <div>
        <div className="heading">
          <h1>Concept Videos</h1>
          <h5>Select a number</h5>
        </div>
        <div>
          <div
            className="current-question-num left"
            onClick={() => {
              //this.instances.next();
              var instance = M.Carousel.getInstance(
                document.getElementsByClassName("carousel")[0]
              );
              instance.prev();
            }}
          >
            {"<"}
          </div>
          <div className="carousel">
            {this.state.cards.map((item) => {
              return (
                <a className="carousel-item" href style={{ width: "15%" }}>
                  <div
                    className="card"
                    style={{
                      color: "black",
                      border: "10x solid black",
                      borderRadius: "20px",
                    }}
                  >
                    <div
                      className="card-image"
                      style={{ height: "100px", alignItems: "center" }}
                    >
                      <i
                        className="fa fa-youtube-play fa-5x"
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "35%",
                          //   transform: "translate(" - (50 % ", ") - (50 % ")"),
                        }}
                      ></i>
                    </div>
                    <div className="card-content">
                      <p>See what Leena Barua thinks about our plans</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div
            className="current-question-num right"
            onClick={() => {
              //this.instances.next();
              var instance = M.Carousel.getInstance(
                document.getElementsByClassName("carousel")[0]
              );
              instance.next();
            }}
          >
            {">"}
          </div>
        </div>
        <div className="heading">
          <h1>Live Classes</h1>
          <h5>Select a number</h5>
        </div>
        <div className="numbers">
          {this.state.cards.map((item) => {
            return (
              <div
                className="classNumber"
                value={item.class}
                onClick={(event) => {
                  this.handleClick(item.class);
                }}
              >
                {item.class}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeComponent;
