import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { workMediaLocationUpdated, popupShowed } from 'actions';
import Content from './Content';
import styles from './styles.css';

class Project extends Component {
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

    const bgOffStyle = { backgroundImage: `url(${!!images && images.tileOff})` };
    const bgOnStyle = { backgroundImage: `url(${!!images && images.tileOn})` };

    return (
      <div
        className={
          `${styles.Project} ${styles[target]}
          ${!!isCurrent && styles.current}
          ${this.isOtherCurrent() && styles.otherCurrent}`
        }
      >
        <a
          className={`${styles.ProjectTile} ${parentLoading && styles.parentLoading}`}
          data-target={target}
          onClick={this.boundHandleTileClick}
        >
          <div className={`${styles.bg} ${styles.off}`} style={bgOffStyle} />
          <div className={`${styles.bg} ${styles.on}`} style={bgOnStyle} />
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.tagline}>{tagline}</div>
          </div>
          <div className={styles.close}>X</div>
        </a>
        <Content {...this.props} updateCurrent={updateCurrent} showPopup={showPopup} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    parentLoading: state.loading.media || state.loading.images,
    current: state.workMedia.location,
    isCurrent: state.workMedia.location === ownProps.target,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrent: (target) => {
      dispatch(workMediaLocationUpdated(target));
    },
    showPopup: (popup) => {
      dispatch(popupShowed(popup));
    },
  };
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
