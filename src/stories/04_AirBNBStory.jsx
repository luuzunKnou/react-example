import { storiesOf } from "@storybook/react";
import React from "react";
import Ex01_AirBNBApp from "../04_airBNB/Ex01_AirBNBApp";
import Ex02_InputWithStyle from "../04_airBNB/Ex02_InputWithStyle";

storiesOf("04_AirBNBStory", module) //Story Book에 추가.
  .addWithJSX("Ex01_AirBNBApp", () => <Ex01_AirBNBApp />)
  .addWithJSX("Ex02_InputWithStyle", () => (
    <Ex02_InputWithStyle
      label="Ex02_InputWithStyle"
      name="Ex02_InputWithStyle"
      errorMessage="Insert Value!"
    />
  ));
