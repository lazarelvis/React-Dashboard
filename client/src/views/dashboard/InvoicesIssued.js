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
    color: colors.green[500],
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
const InvoicesIssued = () => {
  const classes = useStyles();

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
              0 Lei
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
