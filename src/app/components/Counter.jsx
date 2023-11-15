import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/slice/counterSlice";
import { incrementMultiplier, decrementMultiplier } from "../../redux/slice/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [inputMulState, setInputMulState] = useState("");

  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-white pb-2 h4">Counter: {count}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-primary"
            >
              Add
            </button>{" "}
            &nbsp;
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Multiplier Counter</h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  type="text"
                  placeholder="multiplier..."
                  className="form-control"
                  value={inputMulState}
                  onChange={(e) => setInputMulState(e.target.value)}
                />
              </div>
              <div className="col-4 p-1">
                <button
                  onClick={() => dispatch(incrementMultiplier(inputMulState))}
                  className="btn btn-primary form-control"
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                <button
                  onClick={() => dispatch(decrementMultiplier(inputMulState))}
                  className="btn btn-danger form-control"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
