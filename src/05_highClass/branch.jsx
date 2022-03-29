import React from "react";
import branch from "recompose/branch";
import Ex04_Button from "../04_airBNB/Ex04_Button";

export default branch(
 ({isLoading}) => isLoading,
 () => () => <Ex04_Button disabled>Loading...</Ex04_Button>,
)(Ex04_Button);

/* 
  branch(
    props => boolean,     //출력 조건을 결정
    HigherOrderComponent, //참일 때 반환할 Component
    HigherOrderComponent  //거짓일 때 반환할 Component. 생략하면 WrappedComponent 반환.
  )(WrappedComponent)
*/