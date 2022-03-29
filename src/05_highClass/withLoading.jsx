import React from "react";

export default function (loadingMessage = "로딩 중"){
  return function withLoading(WrappedComponent) {
      const { displayName, name:componentName } = WrappedComponent; //WrappedComponent의 displayName과 name을 가져옴
      const wrappedComponentName = displayName || componentName; //displayName이 있으면 표시, 없으면 name 표시

      function WithLoading({ isLoading, ...otherProps }){
        if(isLoading) {
          return loadingMessage;
        }

        return(
          <WrappedComponent {...otherProps}/>
        );
      }
      WithLoading.displayName = `withLoading(${wrappedComponentName})` //컴포넌트 이름 표시
      return WithLoading;
    }
}