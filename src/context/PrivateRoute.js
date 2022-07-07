import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function PrivateRoute({ component: RouteComponenet, ...rest }) {
  const currentUser = useAuth();
  // const navigate=useNavigate()
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <RouteComponenet {...props} />
        ) : (
          <Navigate to="/" replace />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
