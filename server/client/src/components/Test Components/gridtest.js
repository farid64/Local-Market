import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormTextField from '../FormTextField';
import FormNumberField from '../FormNumberField';
import FormPhoneNumber from '../FormPhoneNumber';

const style = theme => ({
  grid_item: {
    border: `1px solid black`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  commentBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentField: {
    width: '90%'
  }
});

const TestGrid = ({ classes, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item className={classes.grid_item} xs={12} sm={8}>
          <Field
            label="First Name"
            name="firstname"
            component={FormTextField}
            type="text"
          />
          <Field
            label="Middle Name"
            name="middlename"
            component={FormTextField}
            type="text"
          />
          <Field
            label="Last Name"
            name="lastname"
            component={FormTextField}
            type="text"
          />
          <Field
            label="Mother's Name"
            name="mothername"
            component={FormTextField}
            type="text"
          />
          <Field
            label="Phone Number"
            name="phonenumber"
            placeholder="(555) 555-5555"
            component={FormPhoneNumber}
          />

          <Field
            label="Amount"
            name="dollaramount"
            component={FormNumberField}
            prefix="$"
          />
        </Grid>
        <Grid
          item
          className={classNames(classes.grid_item, classes.commentBox)}
          xs={12}
          sm={4}
        >
          <TextField
            label="Comment"
            name="comment"
            variant="outlined"
            multiline
            rows="4"
            margin="normal"
            className={classes.commentField}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: 'test_form'
})(withStyles(style)(TestGrid));
