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
import nums from '../utils/convertToNumber';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
    // backgroundColor: theme.palette.background.paper
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
    num: '00',
    cols: 2
  }
];

class NumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
      element: null,
      caretPosition: 0
    };
  }

  handleClick = num => {
    let newNum = '0';
    let oldNum;
    let numArr = [];
    let caretPos;
    if (num !== 'back') {
      caretPos = this.state.caretPosition;
      oldNum = this.state.num;
      newNum = oldNum.substring(0, caretPos) + num + oldNum.substring(caretPos);
      this.setState({
        num: newNum ? newNum : '',
        caretPosition: caretPos + num.length
      });
    } else {
      caretPos = this.state.caretPosition;
      oldNum = this.state.num;
      numArr = oldNum.split('');
      if (caretPos !== 0) {
        numArr.splice(caretPos - 1, 1);
        newNum = numArr.join('');
        this.setState({
          num: newNum ? newNum : '',
          caretPosition: caretPos - 1
        });
      } else {
        return;
      }
    }
    this.props.input.onChange(newNum ? newNum : '');
  };

  onChange = event => {
    const num = event.currentTarget.value;
    this.setState({ num });
    this.props.input.onChange(num ? num : '');
  };

  onFocus = event => {
    this.setState({ element: event.target });
  };

  onBlur = event => {
    this.setState({ caretPosition: event.target.selectionStart });
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
        <GridList cellHeight={height} style={{ width }} cols={3}>
          <GridListTile
            cols={2}
            // className={classes.gridListTile}
            classes={{
              tile: classes.gridListTileInner
            }}
          >
            <TextField
              label={label}
              className={classes.textField}
              value={input.value}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                )
              }}
              helperText={touched && error}
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
                <Typography variant="h4" component="h2">
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
