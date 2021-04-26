import {
  fetchAuthenticationUser,
  fetchAuthUser
} from '../../../actions/authentication';
import { connect } from 'react-redux';
import LoginView from './components/LoginView';

const mapStateToProps = state => {
  return {
    setAuthenticationFailure: state.setAuthenticationFailure,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthentication: data => {
    dispatch(fetchAuthenticationUser(data));
  },
  fetchAuthUser: () => {
    dispatch(fetchAuthUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
