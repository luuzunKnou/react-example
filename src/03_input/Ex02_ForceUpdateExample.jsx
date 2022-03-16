import React, { Component } from "react";

class Ex02_ForceUpdateExample extends Component {
  constructor(props) {
    super(props);

    this.loading = true;
    this.formData = "no data";
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000); //4초 후 handleData 함수 실행
  }

  handleData() {
    this.loading = false;
    this.formData = "new data";
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p>로딩중 : {String(this.loading)}</p>
        <p>결좌 : {String(this.formData)}</p>
      </div>
    );
  }
}
export default Ex02_ForceUpdateExample;
