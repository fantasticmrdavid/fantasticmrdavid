import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Blinker from 'components/Blinker';

const LETTER_INTERVAL = 30;
const COMPLETE_DELAY_INTERVAL = 2000;

class TerminalText extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: <Fragment />,
      index: 0,
      letters: props.children.split(''),
      currentLine: '',
      complete: false,
      paused: false,
    };

    this.boundAddChar = this.addChar.bind(this);
    this.boundPauseTypewriter = this.pauseTypewriter.bind(this);
    this.boundStartTypewriter = this.startTypewriter.bind(this);
    this.boundStartTypewriter();
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this.boundPauseTypewriter();
    this._isMounted = false;
  }

  addChar() {
    const {
      complete,
      currentLine,
      index,
      letters,
      text,
    } = this.state;

    const {
      onComplete,
    } = this.props;

    if (complete) {
      this.boundPauseTypewriter();
      setTimeout(() => {
        if (!!onComplete) onComplete();
        return true;
      }, COMPLETE_DELAY_INTERVAL);
    }

    const nextChar = letters[index];

    return this.setState(index < letters.length
      ? {
        text: nextChar === '\n' ? <Fragment>{text}{currentLine}<br /></Fragment> : <Fragment>{text}</Fragment>,
        currentLine: nextChar === '\n' ? '' : `${currentLine}${nextChar}`,
        index: index + 1,
      } : {
        complete: true,
      });
  }

  pauseTypewriter() {
    clearInterval(this.typewriter);
    this.setState({ paused: true });
  }

  startTypewriter() {
    const { speed } = this.props;
    const { paused } = this.state;
    this.typewriter = setInterval(() => {
      this.boundAddChar();
    }, speed || LETTER_INTERVAL);
    if (paused) this.setState({ paused: false });
  }

  render() {
    const {
      complete,
      currentLine,
      paused,
      text,
    } = this.state;
    const { blinker } = this.props;

    return (
      <Fragment>
        {text}{currentLine}
        {blinker && <Blinker solid={!complete && !paused} />}
      </Fragment>);
  }
}

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
  blinker: PropTypes.bool,
  onComplete: PropTypes.func,
  speed: PropTypes.number,
};

export default TerminalText;
