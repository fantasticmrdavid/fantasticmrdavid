import React, {
  memo,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementCompleted':
      return {
        ...state,
        completedCount: parseInt(state.completedCount, 10) + 1,
      };
    case 'completeLoading':
      return {
        ...state,
        completed: true,
      };
    default: throw new Error();
  }
};

const ImagePreloader = memo(
  ({ images, completedAction }) => {
    const [state, dispatch] = useReducer(reducer, {
      completedCount: 0,
      completed: false,
    });
    const initImage = useCallback((src) => {
      const image = new Image();

      image.onload = () => {
        if (!state.completed) dispatch({ type: 'incrementCompleted' });
      };
      image.src = src;
    }, [state.completedCount]);

    images.map(i => useEffect(() => initImage(i), [i]));

    if (!state.completed && state.completedCount === images.length) {
      completedAction();
      dispatch({ type: 'completeLoading' });
    }

    const { Container } = styles;
    return (
      <Container completed={state.completed}>
        {state.completedCount / images.length * 100}%
      </Container>
    );
  },
);

ImagePreloader.propTypes = {
  images: PropTypes.array.isRequired,
  completedAction: PropTypes.func,
};

export default ImagePreloader;
