import React from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from '../../components/Page';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { ContextProvider } from './components/Context';

import './css/style.css';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const BudgetCalcualtor = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Budget">
      <Container maxWidth={false} className="calculator-budget">
        <Box mt={3}>
          <Grid container spacing={3}></Grid>
        </Box>
        <Box mt={3} justifyContent="center">
          <ContextProvider>
            <Header />
            <div className="container">
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
              <Balance />
            </div>
          </ContextProvider>
        </Box>
      </Container>
    </Page>
  );
};

export default BudgetCalcualtor;
