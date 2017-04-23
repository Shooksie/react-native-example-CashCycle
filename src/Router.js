import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './User/LoginForm';
import PoolList from './Views/PoolList';
import SignUp from './User/signupfrom';
import Sliders from './Views/DepositPage';
import MainPage from './main';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ marginBottom: 0 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Upstart" hideNavBar initial />
        <Scene key="register" component={SignUp} title="starting" hideNavBar />
      </Scene>
      <Scene key="main">
        <Scene key="overview" component={MainPage} title="Overview" hideNavBar initial />
        <Scene key="PoolList" component={PoolList} title="PoolList" hideNavBar={false} />
        <Scene key="deposit" component={Sliders} title="Deposit" hideNavBar={false} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
