import React from 'react';
import './css/style.css';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  },
  differenceValue: {
    color: colors.green[500],
    marginRight: theme.spacing(1)
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differencePercent: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  },
  colorTotalBalance: {
    color: colors.red[500],
    marginRight: theme.spacing(1)
  }
}));
const Budget = ({ transactions }) => {
  const classes = useStyles();

  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL BALANCE
            </Typography>
            <Typography
              className={
                total < 0 ? classes.colorTotalBalance : classes.differenceValue
              }
              color="textPrimary"
              variant="h3"
            >
              {total} Lei
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography variant="body2" className={classes.differencePercent}>
            0%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Budget;
