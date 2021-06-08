import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@material-ui/core';
import Page from '../../../components/Page';
import moment from 'moment';
import 'moment/locale/ro';
moment.locale('ro');

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddInvoice = ({ addInvoiceUserData }) => {
  const classes = useStyles();
  const userData = useSelector(state => state.auth);
  console.log('userData', userData);
  const obj = { data: '' };

  return (
    <Page className={classes.root} title="Add Invoice">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              name: '',
              clientCode: '',
              invoiceNumber: '',
              status: 'pending',
              code: '',
              amount: 0,
              createdAt: moment().format('Do/MM/YYYY, h:mm:ss'),
              optional: ''
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .max(255)
                .required('Provider name is required'),
              clientCode: Yup.string().max(255),
              invoiceNumber: Yup.string()
                .max(255)
                .required('Invoice number number is required'),
              code: Yup.string()
                .max(255)
                .required('Barcode number is required'),
              amount: Yup.number().required('Amount invoice is required'),
              optional: Yup.string().max(400)
            })}
            onSubmit={(value, { resetForm }) => {
              let arr = userData.user.data;
              let id = userData.user._id;
              obj.data = arr;

              arr.push(value);
              addInvoiceUserData(id, obj);
              resetForm({});
              // navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              // isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Add invoice
                  </Typography>
                </Box>
                <Card>
                  <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md={12} xs={12}>
                        <TextField
                          error={Boolean(touched.name && errors.name)}
                          fullWidth
                          helperText={touched.name && errors.name}
                          label="Provider name"
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.name}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <TextField
                          error={Boolean(
                            touched.clientCode && errors.clientCode
                          )}
                          fullWidth
                          helperText={touched.clientCode && errors.clientCode}
                          label="Client code"
                          name="clientCode"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.clientCode}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <TextField
                          error={Boolean(
                            touched.invoiceNumber && errors.invoiceNumber
                          )}
                          fullWidth
                          helperText={
                            touched.invoiceNumber && errors.invoiceNumber
                          }
                          label="Invoice Number"
                          name="invoiceNumber"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.invoiceNumber}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <TextField
                          error={Boolean(touched.code && errors.code)}
                          fullWidth
                          helperText={touched.code && errors.code}
                          label="Code number"
                          name="code"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.code}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <TextField
                          error={Boolean(touched.amount && errors.amount)}
                          fullWidth
                          helperText={touched.amount && errors.amount}
                          label="Amount LEI"
                          name="amount"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="number"
                          value={values.amount}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <TextField
                          error={Boolean(touched.optional && errors.optional)}
                          fullWidth
                          helperText={touched.optional && errors.optional}
                          label="Optional..."
                          name="optional"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="text"
                          value={values.optional}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box display="flex" justifyContent="flex-end" p={2}>
                    <Button
                      color="primary"
                      // disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Add Invoice
                    </Button>
                  </Box>
                </Card>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default AddInvoice;
