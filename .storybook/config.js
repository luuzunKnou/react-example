import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from "babel-runtime/helpers/interopRequireDefault";
import JSXAddon from "storybook-addon-jsx";

// 04 스타일 적용시 사용된 파일
import "../src/sass/materialize.scss";

function loadStories() {
  //스토리 추가
  //require('../src/stories/InputStory');

  //스토리 자동 추가
  const context = require.context("../src/stories", true, /Story\.jsx$/);
  context.keys().forEach((srcFile) => {
    interopRequireDefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
