import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDoctorsRequest } from '../actions/doctors';
import { Header } from './Header';
import DoctorsList from './DoctorsList';

const App = props => {
  const { getDoctorsRequest, doctors } = props;

  useEffect(() => {
    getDoctorsRequest();
  }, [getDoctorsRequest]);

  return (
    <>
      
      <DoctorsList doctors={doctors.items} />
      <Header />
    </>
  );
};

export default connect(
  ({ doctors }) => ({ doctors }),
  {
    getDoctorsRequest
  }
)(App);
