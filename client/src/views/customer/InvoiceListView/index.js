import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const InvoiceListView = () => {
  const userData = useSelector(state => state.auth);
  const classes = useStyles();
  const [invoices] = useState(userData.user.data);
// console.log('userData',userData.user.data);
  return (
    <Page className={classes.root} title="Invoices">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results invoices={invoices} />
        </Box>
      </Container>
    </Page>
  );
};

export default InvoiceListView;
