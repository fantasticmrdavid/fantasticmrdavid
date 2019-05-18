import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import * as styles from './styles';

const Project = memo(
  (props) => {
    const {
      current,
      title,
      tagline,
      target,
      images,
      parentLoading,
      isCurrent,
      updateCurrent,
      showPopup,
    } = props;

    const handleTileClick = useCallback((e) => {
      e.preventDefault();
      const newCurrent = !!isCurrent ? undefined : target;
      updateCurrent(newCurrent);
    }, [isCurrent, target]);

    const isOtherCurrent = !!isCurrent ? false : !!current;

    const {
      Container,
      Tile,
      Image,
      TileContent,
      Title,
      Tagline,
      Close,
    } = styles;

    return (
      <Container
        current={isCurrent}
        otherCurrent={isOtherCurrent}
      >
        <Tile
          current={isCurrent}
          parentLoading={parentLoading}
          target={target}
          otherCurrent={isOtherCurrent}
          onClick={handleTileClick}
        >
          <Image
            current={isCurrent}
            target={target}
            srcOn={images.tileOn}
            srcOff={images.tileOff}
          />
          <TileContent current={isCurrent}>
            <Title>{title}</Title>
            <Tagline>{tagline}</Tagline>
          </TileContent>
          <Close current={isCurrent}>X</Close>
        </Tile>
        <Content {...props} updateCurrent={updateCurrent} showPopup={showPopup} />
      </Container>
    );
  },
);

Project.propTypes = {
  updateCurrent: PropTypes.func.isRequired,
  showPopup: PropTypes.func,
  parentLoading: PropTypes.bool,
  isCurrent: PropTypes.bool,
  current: PropTypes.string,
  target: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  images: PropTypes.object,
};

export default Project;
