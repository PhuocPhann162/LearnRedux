import React from "react";
import { useDispatch } from "react-redux";
import { resetDestination } from "../../redux/slice/destinationSlice";

function ResetApp() {
  const dispatch = useDispatch();

  const resetApp = () => {
    dispatch(resetDestination());
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
