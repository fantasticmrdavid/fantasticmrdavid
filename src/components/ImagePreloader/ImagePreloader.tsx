import React, { memo, useCallback, useEffect, useReducer } from "react";
import { Container } from "./imagePreloader.styles";

type State = {
  isCompleted: boolean;
  completedCount: number;
};

type Action = {
  type: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "incrementCompleted":
      return {
        ...state,
        completedCount: state.completedCount + 1,
      };
    case "completeLoading":
      return {
        ...state,
        completed: true,
      };
    default:
      throw new Error();
  }
};

interface ImagePreloaderProps {
  images: string[];
  hideCompletedCount?: boolean;
  completedAction?: (...args: any[]) => any;
}

export const ImagePreloader = memo(
  ({ images, completedAction, hideCompletedCount }: ImagePreloaderProps) => {
    const [state, dispatch] = useReducer(reducer, {
      completedCount: 0,
      isCompleted: false,
    });
    const initImage = useCallback(
      (src: string) => {
        const image = new Image();

        image.onload = () => {
          if (!state.isCompleted) dispatch({ type: "incrementCompleted" });
        };
        image.src = src;
      },
      [state.completedCount]
    );

    images.map((i) => useEffect(() => initImage(i), [i]));

    useEffect(() => {
      if (!state.isCompleted && state.completedCount === images.length) {
        if (completedAction) completedAction();
        dispatch({ type: "completeLoading" });
      }
    }, [state.isCompleted, state.completedCount, completedAction]);

    return (
      <Container $isCompleted={state.isCompleted}>
        {!hideCompletedCount && (
          <>{((state.completedCount / images.length) * 100).toFixed()}%</>
        )}
      </Container>
    );
  }
);
