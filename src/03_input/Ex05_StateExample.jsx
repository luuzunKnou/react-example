import React, { Component } from "react";
import $ from "jquery";

class Ex05_StateExample extends Component {
  constructor(props) {
    super(props);

    //const interval = setInterval(this.addCount, 1000); //State에 interval 변수 저장
    //생성자 에서 state 기본값 정의
    this.state = {
      loading: true,
      formData: "no data",
      count: 1,
      //interval: interval, //State에 interval 변수 저장
    };

    this.handleData = this.handleData.bind(this); //CallBack 함수를 전달하기 위해 bind
    setTimeout(this.handleData, 4000); //4초 후 handleData 함수 실행

    this.addCount = this.addCount.bind(this);
    this.interval = setInterval(this.addCount, 1000); //전역변수로 interval 변수 선언
  }

  handleData() {
    const data = "new data";

    /* 
    const { formData } = this.state;
    this.setState({
      loading: false,
      formData: data,
    });
    */
    this.setState((prevState) => ({
      loading: false,
      formData: data + " / 이전 데이터 : " + prevState.formData,
    }));

    //clearInterval(this.state.interval); //State에 interval 변수 저장
    clearInterval(this.interval); //전역변수로 interval 변수 선언
    $("#countP").css("display", "none");
  }

  addCount() {
    const { formData } = this.state;
    const count = this.state.count + 1;
    this.setState({
      count: count,
    });
  }

  render() {
    return (
      <div>
        {/* sate 데이터는 this.state로 접근 가능합니다. */}
        <p>로딩중 : {String(this.state.loading)}</p>
        <p>결좌 : {String(this.state.formData)}</p>
        <p id="countP">Count : {String(this.state.count)}</p>
      </div>
    );
  }
}

export default Ex05_StateExample;
