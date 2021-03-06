import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { path } from "./../constants/path";
import { role as ROLE } from "./../constants/role";

function PrivateRoute({ component: Component, role, ...rest }) {
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const admin = useSelector((state) => state.adminReducer.admin);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth)
          return (
            <Redirect
              to={{
                pathname: path.SIGN_IN,
                state: { from: props.location },
              }}
            />
          );

        if (
          role &&
          !admin.roles.includes(role) &&
          admin.role !== ROLE.FULL_PERMISSION
        )
          return <Redirect to={path.FORBIDDEN} />;
        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
