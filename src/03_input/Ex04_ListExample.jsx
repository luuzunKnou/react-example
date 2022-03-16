import React, { Component } from "react";

class Ex04_ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => <div>Price : {price}원</div>);
    return (
      <div>
        <label>Price List</label>
        {prices}
      </div>
    );
  }
}

export default Ex04_ListExample;
