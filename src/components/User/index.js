import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { selectUser } from "../../services/user/actions";

const UserInfo = ({ selectUser }) => {
  return (
    <select
      onChange={e => selectUser(e.target.value)}
      class="browser-default custom-select custom-select-lg mb-3">
      <option selected value="DEFAULT">
        Default User
      </option>
      <option value="SECOND_BITE">SecondBite</option>
      <option value="AXIL">Axil Coffee Roasters</option>
      <option value="MYER">Myer</option>
    </select>
  );
};

UserInfo.propTypes = {
  selectUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { selectUser }
)(UserInfo);
