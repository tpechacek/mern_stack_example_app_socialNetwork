import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    // in here we do jsx for each alert
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// We are mapping the Redux state to a prop in this component
// So we have access to it. i.e. the array of alerts.
const mapStateToProps = state => ({
  // Comes from the /reducers/index.js file as the alert reducer.
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
