import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  GridList,
  GridListTile,
  Typography,
  ButtonBase
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 231
    // height: 450
  },
  gridListTile: {
    display: 'flex',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'pink',
    border: '1px solid white'
  },
  gridListTileInner: {
    width: '100%'
  },
  buttonBase: {
    width: '100%',
    height: '100%'
  }
});

const numpadData = [
  {
    num: 1,
    cols: 1
  },
  {
    num: 2,
    cols: 1
  },
  {
    num: 3,
    cols: 1
  },
  {
    num: 4,
    cols: 1
  },
  {
    num: 5,
    cols: 1
  },
  {
    num: 6,
    cols: 1
  },
  {
    num: 7,
    cols: 1
  },
  {
    num: 8,
    cols: 1
  },
  {
    num: 9,
    cols: 1
  },
  {
    num: 0,
    cols: 1
  },
  {
    num: '00',
    cols: 2
  }
];

class NumPad extends React.Component {
  state = {
    num: 0
  };
  handleClick = num => {
    this.props.action(num);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={75} className={classes.gridList} cols={3}>
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
