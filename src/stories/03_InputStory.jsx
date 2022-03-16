import { storiesOf } from "@storybook/react";
import React from "react";
import Ex01_PropsComponent from "../03_input/Ex01_PropsComponent";
import Ex02_ForceUpdateExample from "../03_input/Ex02_ForceUpdateExample";
import Ex03_Counter from "../03_input/Ex03_Counter";
import Ex04_ListExample from "../03_input/Ex04_ListExample";
import Ex05_StateExample from "../03_input/Ex05_StateExample";
import Ex06_TodoList from "../03_input/Ex06_TodoList";
import Ex07_CounterApp from "../03_input/Ex07_CounterApp";
import Ex08_ScrollSpy from "../03_input/Ex08_ScrollSpy";
import Ex09_Input from "../03_input/Ex09_Input";

storiesOf("03_Input", module) //Story Book에 추가.
  .addWithJSX("Ex01_PropsComponent", () => (
    <Ex01_PropsComponent name="Do-It React!" />
  ))
  .addWithJSX("Ex01_PropsComponent_ChildNode", () => (
    <Ex01_PropsComponent>
      <p>"Childe Node"</p>
    </Ex01_PropsComponent>
  ))
  .addWithJSX("Ex02_ForceUpdateExample", () => <Ex02_ForceUpdateExample />)
  .addWithJSX("Ex03_Counter", () => <Ex03_Counter count={1} />)
  .addWithJSX("Ex04_ListExample", () => <Ex04_ListExample />)
  .addWithJSX("Ex05_StateExample", () => <Ex05_StateExample />)
  .addWithJSX("Ex06_TodoList", () => <Ex06_TodoList />)
  .addWithJSX("Ex07_CounterApp", () => <Ex07_CounterApp />)
  .addWithJSX("Ex08_ScrollSpy", () => <Ex08_ScrollSpy />)
  .addWithJSX("Ex09_Input", () => (
    <Ex09_Input
      label="Ex09_Input"
      name="Ex09_Input"
      value="Test Value"
      type="text"
      errorMessage="ERROR!"
      autoFocus={true}
    />
  ))
  .addWithJSX("Ex09_Input_Addon_Actions", () => (
    <Ex09_Input onChange={action("Event onChange")} />
  ));
