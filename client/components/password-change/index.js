import {connect} from "react-redux";

import Component from "./password-change";

const mapStateToProps = state => {
  return {
    passwordConfirm: state.organization.configuration.components.confirm_form,
    language: state.language,
    orgSlug: state.organization.configuration.slug,
  };
};
export default connect(
  mapStateToProps,
  null,
)(Component);
