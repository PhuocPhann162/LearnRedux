import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../../redux/action/actions";


function ResetApp() {
  const dispatch = useDispatch();

  const resetApp = () => {
    dispatch(resetReduxOPedia());
  };

  return (
    <div className="text-center">
      <button onClick={resetApp} className="btn btn-warning">
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
