import { storiesOf } from "@storybook/react";
import React from "react";
import Ex03_Text from "../04_airBNB/Ex03_Text";
import Ex04_Button from "../04_airBNB/Ex04_Button";
import withHoc from "../05_highClass/withHoc";
import withLoading from "../05_highClass/withLoading";
import BranchLoadingButton from "../05_highClass/branch";


const ButtonWithHoc = withHoc(Ex04_Button);
const TextWithHoc = withHoc(Ex03_Text);
const TextWithLoading = withLoading("Loading")(Ex03_Text);
const ButtonWithLoading = withLoading(<Ex04_Button disabled>Loading...</Ex04_Button>)(Ex04_Button);

storiesOf("05_HighClass", module) //Story Book에 추가.
  .addWithJSX("Default Setting", () => (<div>
    <ButtonWithHoc>Button</ButtonWithHoc>
    <TextWithHoc>Text</TextWithHoc>
  </div>))
  .addWithJSX("Large Example", () => (
    <div>
        <ButtonWithHoc large>Large Button</ButtonWithHoc>
        <TextWithHoc large>Large Text</TextWithHoc>
    </div>
  ))
  .addWithJSX("Loading Example", () => (
    <div>
        <TextWithLoading >Loading Complete</TextWithLoading>
        <ButtonWithLoading isLoading>Loading Complete</ButtonWithLoading>
    </div>
  ))
  .addWithJSX("Branch Example Default", () => <BranchLoadingButton>Hello</BranchLoadingButton>)
  .addWithJSX("Branch Example IsLoading", () => <BranchLoadingButton isLoading>Hello</BranchLoadingButton>);
