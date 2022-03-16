import React, { Component } from "react";
import "./../sass/materialize.scss";
import "./../App.css";

class Ex01_AirBNBApp extends Component {
  render() {
    return (
      <div>
        <nav>
          {/* sass/components/_variables.scss 파일의 primary-color를 수정하면 Title 배경색이 변경됨. */}
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머터리얼 CSS</h1>
      </div>
    );
  }
}

export default Ex01_AirBNBApp;
