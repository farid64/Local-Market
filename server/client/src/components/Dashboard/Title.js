import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    flexGrow: 1
  }
});

const Title = ({ location, classes }) => {
  return (
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      className={classes.title}
    >
      {location.pathname}
    </Typography>
  );
};

export default withRouter(withStyles(styles)(Title));
