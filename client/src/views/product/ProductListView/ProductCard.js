import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { BiBarcodeReader } from 'react-icons/bi';
import product from '..';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  imageSize: {
    width: '70px',
    height: '70px'
  }
}));

const ProductCard = ({ className, product, sendEmail, authData, ...rest }) => {
  const classes = useStyles();

  const obj = {
    _id: authData._id,
    email: authData.email,
    product: ''
  };
  const sendEmailFunc = prod => {
    obj.product = prod;
    sendEmail(obj);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" justifyContent="end" mb={3}>
          <Avatar
            className={classes.imageSize}
            alt="Product"
            src={product.media}
            variant="square"
          />
        </Box>
        <Typography align="left" color="textPrimary" gutterBottom variant="h4">
          {product.title}
        </Typography>
        <Typography align="left" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <Button onClick={() => sendEmailFunc(product.title)}>
              <BiBarcodeReader />
              Click to scan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
