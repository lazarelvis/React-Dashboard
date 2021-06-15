import React, { useEffect } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Budget from './Budget';
import TotalExpenses from './TotalExpenses';
import InvoicesIssued from './InvoicesIssued';
import InvoicesPaid from './InvoicesPaid';
import ChartBuget from './ChartBuget';
import ChartExpenses from './ChartExpenses';
import LatestInvoices from './LatestInvoices';
import { useSelector } from 'react-redux';

import { getExpenseFetch } from '../../actions/expenses';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = ({ getExpenseData, getExpense }) => {
  const userData = useSelector(state => state.auth);
  const classes = useStyles();
  useEffect(() => {
    getExpenseData();
  }, []);

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget transactions={getExpense} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalExpenses transactions={getExpense} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <InvoicesPaid />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <InvoicesIssued userData={userData} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <ChartBuget />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <ChartExpenses />
          </Grid>
          {/* <Grid item lg={4} md={6} xl={3} xs={12}></Grid> */}
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <LatestInvoices userData={userData} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    getExpense: state.getExpense
  };
};

const mapDispatchToProps = dispatch => ({
  getExpenseData: () => {
    dispatch(getExpenseFetch());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
