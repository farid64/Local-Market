import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Retail"
    data-name="Retail"
    onClick={this.handleMenuClick.bind(this)}
  >
    <RetailIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Face"
    data-name="Face"
    onClick={this.handleMenuClick.bind(this)}
  >
    <FaceIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Account Balance"
    data-name="Checks"
    onClick={this.handleMenuClick.bind(this)}
  >
    <AccountBalanceIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <Typography variant="h3" gutterBottom>
    Cash In
  </Typography>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <Typography variant="h3" gutterBottom>
    Cash Out
  </Typography>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Money Transfer"
    data-name="Money Transfer"
    onClick={this.handleMenuClick.bind(this)}
  >
    <MoneyTransferIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Fax"
    data-name="Fax"
    onClick={this.handleMenuClick.bind(this)}
  >
    <FaxIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="EBT"
    data-name="EBT"
    onClick={this.handleMenuClick.bind(this)}
  >
    <EbtIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Other Sales"
    data-name="Other Sales"
    onClick={this.handleMenuClick.bind(this)}
  >
    <OtherSaleIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <ButtonBase
    aria-label="ATM"
    data-name="ATM"
    onClick={this.handleMenuClick.bind(this)}
  >
    <img alt="atm" src={Atm} />
  </ButtonBase>
  {/* <IconButton
    aria-label="ATM"
    data-name="ATM"
    onClick={this.handleMenuClick.bind(this)}
  >
    <AtmIcon className={classes.button} />
  </IconButton> */}
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton
    aria-label="Money Order"
    data-name="Money Order"
    onClick={this.handleMenuClick.bind(this)}
  >
    <MoneyOrderIcon className={classes.button} />
  </IconButton>
</Paper>
</Grid>
<Grid item lg={3} md={6} xs={12}>
<Paper className={classes.paper}>
  <IconButton onClick={() => console.log(menuSelected)}>
    <AtmIcon />
  </IconButton>
</Paper>
</Grid>