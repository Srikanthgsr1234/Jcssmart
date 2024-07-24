import React from 'react';
//import { Link } from 'react-router-dom';

import Landing from './Landing';
import Products from './Products';
import AppWorking from './AppWorking';
import Footer from './Footer';

function Dashboard() {
  return (
   <div>
       <Landing />
       <Products />
       <AppWorking />
       <Footer />
   </div>
  );
}

export default Dashboard;
