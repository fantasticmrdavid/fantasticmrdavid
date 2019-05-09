import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';
import * as styles from './styles';

class Project extends PureComponent {
  constructor() {
    super();
    this.boundHandleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(e) {
    e.preventDefault();

    const { target, isCurrent, updateCurrent } = this.props;
    const newCurrent = !!isCurrent ? undefined : target;
    updateCurrent(newCurrent);
  }

  isOtherCurrent() {
    const { current, isCurrent } = this.props;
    return !!isCurrent ? false : !!current;
  }

  render() {
    const {
      title,
      tagline,
      target,
      images,
      parentLoading,
      isCurrent,
      updateCurrent,
      showPopup,
    } = this.props;

    const {
      Container,
      Tile,
      Image,
      TileContent,
      Title,
      Tagline,
      Close,
    } = styles;

    const otherCurrent = this.isOtherCurrent();

    return (
      <Container
        current={isCurrent}
        otherCurrent={otherCurrent}
      >
        <Tile
          current={isCurrent}
          parentLoading={parentLoading}
          target={target}
          otherCurrent={otherCurrent}
          onClick={this.boundHandleTileClick}
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
        <Content {...this.props} updateCurrent={updateCurrent} showPopup={showPopup} />
      </Container>
    );
  }
}

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
