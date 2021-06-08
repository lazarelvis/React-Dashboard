import { addInvoiceUserData } from '../../actions/users';
import { connect } from 'react-redux';
import AddInvoice from './InvoiceListView/AddInvoice';

const mapStateToProps = state => {
  return {
    invoiceUserData: state.invoiceUserData
  };
};

const mapDispatchToProps = dispatch => ({
  addInvoiceUserData: (id, data) => {
    dispatch(addInvoiceUserData(id, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddInvoice);
