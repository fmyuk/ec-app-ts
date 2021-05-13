import { connect } from "react-redux";
import { compose } from "redux";
import LoginClass from "../templates/LoginClass";
import * as Actions from "../reducks/users/operations";
import { UserState } from "../reducks/type/type";
import { Dispatch } from "react";

const mapStateToProps = (state: UserState) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    actions: {
      signIn() {
        dispatch(Actions.signIn())
      }
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
) (LoginClass);