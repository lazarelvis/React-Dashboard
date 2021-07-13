import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const ChartExpenses = ({ className, transactions, userData, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log('transactions in chart exp: ', transactions);
  const data = {
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Invoices', 'Holidays', 'Other']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const items = transactions.filter(tran => tran.category == 'Living & Energy');
  const itemsHolidaysAndTravel = transactions.filter(
    tran => tran.category == 'Holidays & Travel'
  );
  const itemsFoodAndDining = transactions.filter(
    tran => tran.category == 'Food & Dining'
  );

  const amountExpense = transactions.map(transaction => transaction.amount);

  const totalExpense = (
    amountExpense
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  const amountFoodAndDining = itemsFoodAndDining.map(
    transaction => transaction.amount
  );
  const amountHolidaysAndTravel = itemsHolidaysAndTravel.map(
    transaction => transaction.amount
  );
  const totalHolidaysAndTravel = amountHolidaysAndTravel
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalFoodAndDining = amountFoodAndDining
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const amountLivingAndEnergy = items.map(transaction => transaction.amount);
  const totalLivingAndEnergy = amountLivingAndEnergy
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const transactionsInvoice = userData.user.data;

  console.log('total items totalHolidaysAndTravel:', totalHolidaysAndTravel);
  console.log('total items totalExpense:', totalExpense);
  console.log('total items:', total);
  const percentLivingFromTotal = (
    (totalLivingAndEnergy / totalExpense) *
    100
  ).toFixed(2);
  const percentHolidaysAndTravel = (
    (totalHolidaysAndTravel / totalExpense) *
    100
  ).toFixed(2);

  const percentFoodAndDining = (
    (totalFoodAndDining / totalExpense) *
    100
  ).toFixed(2);

  const devices = [
    {
      title: 'Holidays & Travel ',
      value: Math.abs(percentHolidaysAndTravel),
      color: colors.indigo[500]
    },
    {
      title: 'Living & Energy',
      value: Math.abs(percentLivingFromTotal),
      color: colors.red[600]
    },
    {
      title: 'Food & Dining',
      value: Math.abs(percentFoodAndDining),
      color: colors.orange[600]
    }
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Expensses" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({ color, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h2">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

ChartExpenses.propTypes = {
  className: PropTypes.string
};

export default ChartExpenses;
