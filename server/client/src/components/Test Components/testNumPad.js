import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  GridList,
  GridListTile,
  Typography,
  ButtonBase,
  TextField,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import nums from '../../utils/convertToNumber';
import NumberFieldReverse from './testNumberFieldReverse';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridListTile: {
    display: 'flex',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: theme.palette.primary.light,
    border: '1px solid white'
  },
  gridListTileInner: {
    width: '100%'
  },
  buttonBase: {
    width: '100%',
    height: '100%'
  },
  textField: {
    width: '100%'
  }
});

const numpadData = [
  {
    num: '1',
    cols: 1
  },
  {
    num: '2',
    cols: 1
  },
  {
    num: '3',
    cols: 1
  },
  {
    num: '4',
    cols: 1
  },
  {
    num: '5',
    cols: 1
  },
  {
    num: '6',
    cols: 1
  },
  {
    num: '7',
    cols: 1
  },
  {
    num: '8',
    cols: 1
  },
  {
    num: '9',
    cols: 1
  },
  {
    num: '0',
    cols: 1
  },
  {
    num: '.',
    cols: 0.5
  },
  {
    num: '00',
    cols: 1.5
  }
];

class NumPad extends Component {
  constructor(props) {
    super(props);
    this.textInputElement = null;
    this.textInputCaretPosition = 0;
    this.focusTextInput = () => {
      if (this.textInputElement) this.textInputElement.focus();
    };
    this.state = {
      num: ''
    };
  }

  componentDidMount() {
    this.textInputElement.setAttribute('readonly', 'true');
    // this.focusTextInput();
  }

  decimalMax = string => {
    const dotIndex = string.indexOf('.');
    if (dotIndex === -1) {
      return null;
    }
    if (string[dotIndex + 3]) {
      return true;
    } else {
      return null;
    }
  };

  handleClick = num => {
    let oldNum = this.state.num;
    let newNum;
    let numArr = [];
    let caretPos = this.textInputCaretPosition;
    if (num !== 'back') {
      newNum = oldNum.substring(0, caretPos) + num + oldNum.substring(caretPos);
      if (this.decimalMax(newNum)) {
        return;
      }
      this.textInputCaretPosition = caretPos + num.length;
      this.setState({
        num: newNum
        // caretPosition: caretPos + num.length
      });
    } else {
      numArr = oldNum.split('');
      if (caretPos !== 0) {
        numArr.splice(caretPos - 1, 1);
        newNum = numArr.join('');
        this.textInputCaretPosition = caretPos - 1;
        this.setState({
          num: newNum
          // caretPosition: caretPos - 1
        });
      } else {
        return;
      }
    }
    this.props.input.onChange(newNum);
  };

  onChange = event => {
    this.setState({ num: event.target.value });
    this.props.input.onChange(event.target.value);
  };

  onFocus = event => {
    // this.setState({ caretPosition: event.target.selectionStart });
    // this.textInputCaretPosition = event.target.selectionStart;
  };

  onBlur = event => {
    // this.setState({ caretPosition: event.target.selectionStart });
    this.textInputCaretPosition = event.target.selectionStart;
    // event.target.focus();
  };

  render() {
    const {
      classes,
      input,
      label,
      width,
      height,
      meta: { touched, error }
    } = this.props;
    return (
      <div className={classes.root}>
        <GridList
          cellHeight={nums(height)}
          style={{ width: nums(width) }}
          cols={3}
        >
          <GridListTile
            cols={2}
            // className={classes.gridListTile}
            classes={{
              tile: classes.gridListTileInner
            }}
          >
            <NumberFieldReverse
              input={{
                onChange: this.onChange,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                value: input.value
              }}
              label={label}
              prefix='$'
              decimalScale={2}
              fixedDecimalScale
              inputRef={el => (this.textInputElement = el)}
            />
          </GridListTile>
          <GridListTile cols={1}>
            <IconButton
              className={classes.buttonBase}
              onClick={() => this.handleClick('back')}
            >
              <BackspaceIcon />
            </IconButton>
          </GridListTile>
          {numpadData.map((numpad, index) => (
            <GridListTile
              key={index}
              cols={numpad.cols || 1}
              className={classes.gridListTile}
              classes={{
                tile: classes.gridListTileInner
              }}
            >
              <ButtonBase
                className={classes.buttonBase}
                onClick={() => this.handleClick(numpad.num)}
              >
                <Typography variant='h4' component='h2'>
                  {numpad.num}
                </Typography>
              </ButtonBase>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(NumPad);
