import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from '../../../utils/getInitials';
import Modal from 'react-modal';
import PaypalApp from '../../../components/PaypalApp';
import '../css/style.css';

import { addInvoiceUserData } from '../../../actions/users';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  modal: {
    width: '500px',
    height: '500px'
  }
}));

const Results = ({
  className,
  invoices,
  userData,
  addHistoryUserData,
  invoiceUserData,
  ...rest
}) => {
  const classes = useStyles();
  const [selectedInvoicesIds, setSelectedInvoicesIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [invoiceData, setInvoiceData] = useState({});

  // console.log('userData in results', userData);
  const handleSelectAll = event => {
    let newSelectedInvoicesIds;

    if (event.target.checked) {
      newSelectedInvoicesIds = invoices.map(invoice => invoice.id);
    } else {
      newSelectedInvoicesIds = [];
    }

    setSelectedInvoicesIds(newSelectedInvoicesIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedInvoicesIds.indexOf(id);
    let newSelectedInvoicesIds = [];

    if (selectedIndex === -1) {
      newSelectedInvoicesIds = newSelectedInvoicesIds.concat(
        setSelectedInvoicesIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedInvoicesIds = newSelectedInvoicesIds.concat(
        setSelectedInvoicesIds.slice(1)
      );
    } else if (selectedIndex === selectedInvoicesIds.length - 1) {
      newSelectedInvoicesIds = newSelectedInvoicesIds.concat(
        setSelectedInvoicesIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedInvoicesIds = newSelectedInvoicesIds.concat(
        setSelectedInvoicesIds.slice(0, selectedIndex),
        setSelectedInvoicesIds.slice(selectedIndex + 1)
      );
    }

    setSelectedInvoicesIds(newSelectedInvoicesIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  function openModal(data) {
    setIsOpen(true);
    setInvoiceData(data);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        className={'modal-invoice'}
      >
        <div>
          <h1 className="modal-title">Invoice details</h1>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <div className="modal-box">
              <p className="modal-label">Name</p>
              <p>{invoiceData.name}</p>
            </div>
            <div className="modal-box">
              <p className="modal-label">Amount</p>
              <p>{invoiceData.amount}</p>
            </div>
            <div className="modal-box">
              <p className="modal-label">Invoice date</p>
              <p>{invoiceData.dateInvoice ? invoiceData.dateInvoice : '-'}</p>
            </div>
            <div className="modal-box">
              <p className="modal-label">Invoice barcode</p>
              <p>{invoiceData.code}</p>
            </div>
            <div className="modal-box">
              <p className="modal-label">Registred createdAt</p>
              <p>{invoiceData.createdAt}</p>
            </div>
            <div className="modal-box">
              <p className="modal-label">Status</p>
              <p>{invoiceData.status}</p>
            </div>
            <div className="modal-box">
              <p className="modal-label">Optional</p>
              <p>{invoiceData.optional ? invoiceData.optional : '-'}</p>
            </div>
          </div>
          <PaypalApp
            toPay={invoiceData.amount}
            details={invoiceData}
            addHistoryUserData={addHistoryUserData}
            userData={userData.user}
          />
        </div>
      </Modal>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedInvoicesIds.length === invoices.length}
                    color="primary"
                    indeterminate={
                      selectedInvoicesIds.length > 0 &&
                      selectedInvoicesIds.length < invoices.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Invoice ID</TableCell>
                <TableCell>Client code</TableCell>
                <TableCell>Invoice Amount</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Invoice Number</TableCell>
                <TableCell>Optional</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ textTransform: 'capitalize' }}>
              {invoices.slice(0, limit).map(invoice => (
                <TableRow
                  hover
                  key={invoice.code}
                  selected={selectedInvoicesIds.indexOf(invoice.name) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedInvoicesIds.indexOf(invoice.name) !== -1}
                      onChange={event => handleSelectOne(event, invoice.name)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box alignItems="center" display="flex">
                      <Avatar
                        className={classes.avatar}
                        src={invoice.avatarUrl}
                      >
                        {getInitials(invoice.name)}
                      </Avatar>

                      <Typography
                        color="textPrimary"
                        variant="body1"
                        style={{ cursor: 'pointer' }}
                        onClick={() => openModal(invoice)}
                      >
                        {invoice.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{invoice.code}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {invoice.clientCode ? invoice.clientCode : '-'}
                  </TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.createdAt}</TableCell>
                  <TableCell>
                    <Chip color="primary" label={invoice.status} size="small" />
                  </TableCell>
                  <TableCell>{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.optional}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  invoices: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    invoiceUserData: state.invoiceUserData
  };
};

const mapDispatchToProps = dispatch => ({
  addHistoryUserData: (id, data) => {
    dispatch(addInvoiceUserData(id, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
