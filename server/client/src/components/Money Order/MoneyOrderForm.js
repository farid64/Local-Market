import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import classNames from "classnames";
import { Field, FieldArray, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MoneyIcon from "@material-ui/icons/MoneyTwoTone";
import CancelIcon from "@material-ui/icons/CancelTwoTone";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import CustomerName from "../CustomerName";
import FormTextField from "../FormTextField";
import FormNumberField from "../FormNumberField";
import FormSelectField from "../FormSelectField";
import nums from "../../utils/convertToNumber";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  lineBreak: {
    flexBasis: "100%",
    width: 0,
    height: 0,
    overflow: "hidden"
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  cashContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  formLineContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 20
  },
  formLineItem1: {
    flexGrow: 2
  },
  formLineItem2: {
    flexGrow: 3
  },
  formLineItem3: {
    flex: 3
  },
  formLineItem4: {
    flex: 2
  }
});

class MoneyOrder extends React.Component {
  componentDidUpdate() {
    this.props.autofill(
      "totalAmount",
      this.props.moneyorderValues.values
        ? this.handleTotalAmountCalc(this.props.moneyorderValues)
        : ""
    );
  }

  renderMoneyOrders = ({ fields }) => {
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <Button onClick={() => fields.push()}>Add Money Order</Button>
        {fields.map((order, index) => {
          return (
            <section key={index} className={classes.formLineContainer}>
              <Field
                label='Money Order Company'
                name={`${order}.moneyOrderCompany`}
                component={FormSelectField}
                className={classes.formLineItem1}
              >
                <option value='conventional'>Conventional</option>
                <option value='chase-bank'>Chase Bank</option>
                <option value='wellsfargo'>Wells Fargo</option>
              </Field>

              <Field
                label='Money Order Number'
                name={`${order}.moneyOrderNumber`}
                component={FormTextField}
                className={classNames(classes.textField, classes.formLineItem2)}
                type='text'
              />
              <Field
                label='Amount'
                name={`${order}.amount`}
                className={classNames(classes.textField, classes.formLineItem2)}
                component={FormNumberField}
                placeholder='$900'
                prefix='$'
                normalize={value => nums(value)}
              />
              <Field
                label='Fee'
                name={`${order}.fee`}
                component={FormNumberField}
                className={classNames(classes.textField, classes.formLineItem2)}
                placeholder='$5'
                prefix='$'
                normalize={value => nums(value)}
              />
            </section>
          );
        })}
      </React.Fragment>
    );
  };

  handleTotalAmountCalc = moneyorderValues => {
    const { moneyOrders } = moneyorderValues.values;
    let totalAmount = 0;
    totalAmount = _.sumBy(moneyOrders, o => {
      return o ? o.amount - o.fee : 0;
    });
    return totalAmount;
  };

  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <CustomerName />
        <form className={classes.container} onSubmit={handleSubmit}>
          <FieldArray name='moneyOrders' component={this.renderMoneyOrders} />

          <Divider className={classes.lineBreak} />

          <div className={classes.cashContainer}>
            <Typography className={classes.text}>Total Amount:</Typography>

            <Field
              name='totalAmount'
              className={classes.textField}
              component={FormNumberField}
              placeholder='$1,470'
              prefix='$'
              ReadOnly
            />
          </div>

          <Divider className={classes.lineBreak} />

          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            <MoneyIcon className={classes.leftIcon} />
            Finish and Pay
          </Button>

          <Button
            onClick={() => history.push("/")}
            variant='contained'
            color='secondary'
            className={classes.button}
          >
            <CancelIcon className={classes.leftIcon} />
            Cancel
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

MoneyOrder.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    moneyorderValues: state.form.moneyOrder
  };
};

MoneyOrder = reduxForm({
  form: "moneyOrder"
})(withRouter(withStyles(styles)(MoneyOrder)));

export default connect(mapStateToProps)(MoneyOrder);
