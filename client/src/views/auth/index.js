import { fetchAuthenticationUser } from '../../actions/authentication';
import { connect } from 'react-redux';
import LoginView from './components/LoginView';

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthentication: data => {
    dispatch(fetchAuthenticationUser(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
