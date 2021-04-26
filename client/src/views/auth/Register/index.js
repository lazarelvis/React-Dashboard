import { registerUser } from '../../../actions/users';
import { connect } from 'react-redux';
import RegisterView from './components/RegisterView';

const mapStateToProps = state => {
  return {
    register: state.register
  };
};

const mapDispatchToProps = dispatch => ({
  registerUser: data => {
    dispatch(registerUser(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
