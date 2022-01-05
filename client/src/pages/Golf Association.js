import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

* actionsUser.get
*	@description CRUD ACTION get
*	@param String api_key - https://www.golfgenius.com/api_v2/api_key/events?page&#x3D;page&amp;season&#x3D;season_id&amp;category&#x3D;category_id&amp;archived&#x3D;archived
*

**/

class Golf Association extends Component {
  render() {
    return (
      <div>
        <h1>Golf Association</h1>
                    
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Golf Association.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Golf Association);
