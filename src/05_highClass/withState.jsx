import React from 'react';
import withState from 'recompose/withState';
import Ex04_Button from '../04_airBNB/Ex04_Button';

export const withCountState = withState('count', 'setCount', 0);

function Counter({count, setCount}) {
  const increaseCount = () => setCount(value => value + 1);

  return (
    <div>
      Current Num : {count}
      <Ex04_Button onPress={increaseCount}>
        Add
      </Ex04_Button>
    </div>
  );
}