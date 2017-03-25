import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  workMediaLocationUpdated,
  mediaLoadingStarted,
  mediaLoadingStopped,
  showPopup,
  popupLoadingStarted,
  popupLoadingStopped,
} from '../../../../actions';
import Content from './Content';
import './styles.css';

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
    const { title, tagline, target, images, isCurrent, updateCurrent } = this.props;

    const bgOffStyle = { backgroundImage: `url(${!!images && images.tileOff})` };
    const bgOnStyle = { backgroundImage: `url(${!!images && images.tileOn})` };

    return (
      <div className={`Project u-${target} u-${!!isCurrent && 'current'} u-${this.isOtherCurrent() && 'otherCurrent'}`}>
        <a className="ProjectTile" data-target={target} onClick={this.boundHandleTileClick}>
          <div className="ProjectTile_bg u-off" style={bgOffStyle} />
          <div className="ProjectTile_bg u-on" style={bgOnStyle} />
          <div className="ProjectTile_content">
            <div className="ProjectTile_title">{title}</div>
            <div className="ProjectTile_tagline">{tagline}</div>
          </div>
          <div className="ProjectTile_close">X</div>
        </a>
        <Content {...this.props} updateCurrent={updateCurrent} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    current: state.workMedia.location,
    isCurrent: state.workMedia.location === ownProps.target,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrent: (target) => {
      dispatch(mediaLoadingStarted());
      dispatch(workMediaLocationUpdated(target));
      setTimeout(() => dispatch(mediaLoadingStopped()));
    },
    showPopup: (popup) => {
      dispatch(popupLoadingStarted());
      dispatch(showPopup(popup));
      setTimeout(() => dispatch(popupLoadingStopped()));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
