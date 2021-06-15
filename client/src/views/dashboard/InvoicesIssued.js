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
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceValue: {
    color: colors.red[500],
    marginRight: theme.spacing(1)
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differencePercent: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));
const InvoicesIssued = ({ userData }) => {
  const classes = useStyles();

  const transactions = userData.user.data;
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              INVOICES ISSUED
            </Typography>
            <Typography
              className={classes.differenceValue}
              color="textPrimary"
              variant="h3"
            >
              {total} Lei
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowUpwardIcon className={classes.differenceIcon} />
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

export default InvoicesIssued;
