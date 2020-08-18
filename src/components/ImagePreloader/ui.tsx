import React, {
  memo,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import * as styles from './styles';

type State = {
  completed: boolean,
  completedCount: number,
};

type Action = {
  type: string,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'incrementCompleted':
      return {
        ...state,
        completedCount: state.completedCount + 1,
      };
    case 'completeLoading':
      return {
        ...state,
        completed: true,
      };
    default: throw new Error();
  }
};

interface Props {
  images: string[],
  completedAction?: (...args: any[]) => any,
}

const { Container } = styles;

export default memo(
  ({ images, completedAction }: Props) => {
    const [state, dispatch] = useReducer(reducer, {
      completedCount: 0,
      completed: false,
    });
    const initImage = useCallback((src: string) => {
      const image = new Image();

      image.onload = () => {
        if (!state.completed) dispatch({ type: 'incrementCompleted' });
      };
      image.src = src;
    }, [state.completedCount]);

    images.map((i) => useEffect(() => initImage(i), [i]));

    useEffect(() => {
      if (!state.completed && state.completedCount === images.length) {
        if (completedAction) completedAction();
        dispatch({ type: 'completeLoading' });
      }
    });

    return (
      <Container completed={state.completed}>
        {(state.completedCount / images.length) * 100}%
      </Container>
    );
  },
);
