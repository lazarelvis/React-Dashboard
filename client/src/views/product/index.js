import { sendEmail } from '../../actions/email';
import { connect } from 'react-redux';
import ProductList from './ProductListView';

const mapStateToProps = state => {
  return {
    email: state.email
  };
};

const mapDispatchToProps = dispatch => ({
  sendEmail: data => {
    dispatch(sendEmail(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
