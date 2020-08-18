import React, { FunctionComponent } from 'react';
import { DispatchProps, StateProps } from './types';

type UiProps = DispatchProps & StateProps;

const Ui: FunctionComponent<UiProps> = () => {
  return <div>Tinkerings</div>;
};

export default Ui;
