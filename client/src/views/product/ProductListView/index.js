import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  colors,
  Button
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from '../../../components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';
import data from './data';
import { BiBarcodeReader } from 'react-icons/bi';
import './css/style.css';
import { useSelector } from 'react-redux';

import HelloWorld from './components/HelloWorld.js';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  },
  barcodeIcon: {
    width: '100%',
    fontSize: '200px',
    color: colors.indigo[500],
    backgroundColor: colors.white
  },
  btnBarcode: {
    display: 'flex',
    margin: 'auto'
  }
}));

const ProductList = ({ sendEmail }) => {
  const authData = useSelector(state => state.auth.user);
  const classes = useStyles();
  const [products] = useState(data);

  const obj = {
    _id: authData._id,
    email: authData.email
  };
  const sendEmailFunc = () => {
    sendEmail(obj);
    console.log('email de trimis');
  };

  return (
    <Page className={classes.root} title="Finaces">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <div className="finances-scan-btn">
            <Button className={classes.btnBarcode} onClick={sendEmailFunc}>
              <BiBarcodeReader className={classes.barcodeIcon} />
              Click to scan
            </Button>
          </div>
          {/* <HelloWorld title="Welcome to DBRJS React Example" /> */}
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item key={product.id} lg={12} md={6} xs={12}>
                <ProductCard
                  className={classes.productCard}
                  product={product}
                  sendEmail={sendEmail}
                  authData={authData}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
