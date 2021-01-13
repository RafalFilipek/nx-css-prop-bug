import React from 'react';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div css={{ color: 'red' }}>
      <h1>Welcome to ui!</h1>
    </div>
  );
}

export default Ui;
