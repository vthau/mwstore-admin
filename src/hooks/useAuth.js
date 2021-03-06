import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authToken } from "./../actions/action";

function useAuth() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(authToken(setIsLoading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return [isAuth, isLoading];
}

export default useAuth;
