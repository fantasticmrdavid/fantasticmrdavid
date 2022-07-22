import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import projects, { Project as ProjectProps } from 'data/projects';
import { workMediaLocationUpdated } from './actions';
import Ui, { Props as UiProps } from './ui';

type StateProps = {
  current: string,
  isCurrent: boolean,
  nextProject: ProjectProps,
  previousProject: ProjectProps,
};

type DispatchProps = {
  updateCurrent: (target: string) => void,
};

const mapStateToProps = (state: AppState, ownProps: UiProps) => {
  const { workMedia } = state;
  const currentIndex = projects.findIndex((p: ProjectProps) => p.target === ownProps.target);
  const isLast = currentIndex === projects.length - 1;
  const isFirst = currentIndex === 0;

  return {
    ...ownProps,
    current: workMedia.location,
    isCurrent: workMedia.location === ownProps.target,
    nextProject: projects[isLast ? 0 : currentIndex + 1],
    previousProject: projects[isFirst ? projects.length - 1 : currentIndex - 1],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    updateCurrent: (target: string) => {
      dispatch(workMediaLocationUpdated(target));
    },
  };
};

export default connect<StateProps, DispatchProps, UiProps, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(Ui);
