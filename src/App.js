import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";
import Message from "./pages/Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "./Redux/Auth/auth.action";
import { useEffect } from "react";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  console.log(auth);
  useEffect(() => {
    dispatch(getUserAction(jwt));
  }, [jwt]);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
