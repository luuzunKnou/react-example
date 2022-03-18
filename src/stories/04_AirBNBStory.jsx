import { storiesOf } from "@storybook/react";
import React from "react";
import Ex01_AirBNBApp from "../04_airBNB/Ex01_AirBNBApp";
import Ex02_InputWithStyle from "../04_airBNB/Ex02_InputWithStyle";
import Ex03_Text from "../04_airBNB/Ex03_Text";
import Ex04_Button from "../04_airBNB/Ex04_Button";
import Ex05_CheckBox from "../04_airBNB/Ex05_CheckBox";

storiesOf("04_AirBNBStory", module) //Story Book에 추가.
  .addWithJSX("Ex01_AirBNBApp", () => <Ex01_AirBNBApp />)
  .addWithJSX("Ex02_InputWithStyle", () => (
    <Ex02_InputWithStyle
      label="Ex02_InputWithStyle"
      name="Ex02_InputWithStyle"
      errorMessage="Insert Value!"
    />
  ))
  .addWithJSX("Ex03_Text", () => <Ex03_Text primary xlarge>WithSytleTest</Ex03_Text>)
  .addWithJSX("Ex04_Button", () => <Ex04_Button primary large>BUTTON</Ex04_Button>)
  .addWithJSX("Ex05_CheckBox_Label", () => <Ex05_CheckBox name="agree" label="동의합니다." errorMessage="동의가 필요합니다."><Ex03_Text>동의합니다</Ex03_Text></Ex05_CheckBox>);
