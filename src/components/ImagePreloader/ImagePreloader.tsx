import React, {
  memo,
  useCallback, useContext,
  useEffect,
  useReducer
} from "react";
import { Container } from './imagePreloader.styles';
import { LoadingContext } from "contexts/Loading";

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

interface ImagePreloaderProps {
  images: string[],
  hideCompletedCount?: boolean,
  completedAction?: (...args: any[]) => any,
}

export const ImagePreloader = memo(
  ({ images, completedAction, hideCompletedCount }: ImagePreloaderProps) => {
    const { loading, setLoading } = useContext(LoadingContext);
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
      if (!state.completed) {
        setLoading({ ...loading, images: true });
      } else {
        setLoading({ ...loading, images: false });
      }
    }, [state]);

    useEffect(() => {
      if (!state.completed && state.completedCount === images.length) {
        if (completedAction) completedAction();
        dispatch({ type: 'completeLoading' });
      }
    });

    return (
      <Container completed={state.completed}>
        { !hideCompletedCount && <>{(state.completedCount / images.length) * 100}%</> }
      </Container>
    );
  },
);
