import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import './mixins/chartjs';
import theme from './theme';
import routes from './routes';
import { useSelector } from 'react-redux';

const App = () => {
  const getAuthSuccess = useSelector(state => state.getAuthSuccess);
  // console.log('din routes', getAuthSuccess);
  const routing = useRoutes(routes(getAuthSuccess));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
