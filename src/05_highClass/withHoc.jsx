import React from "react";

export default function withHoc(WrappedComponent){
  const { displayName, name } = WrappedComponent; //WrappedComponent의 displayName과 name을 가져옴
  const wrappedComponentName = displayName || name; //displayName이 있으면 표시, 없으면 name 표시

  return class WithHoc extends React.Component{
    static displayName = `withHoc(${wrappedComponentName})` //컴포넌트 이름 표시
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}