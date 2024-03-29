import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailDestination } from "../../redux/slice/destinationSlice";

function DestinationList() {
  const destinationList = useSelector(
    (state) => state.destinationStore.destinations
  );
  const dispatch = useDispatch();

  return destinationList.map((destination, index) => {
    return (
      <div
        className="text-center text-white row"
        style={{ borderBottom: "1px solid #333" }}
        key={index}
      >
        <div className="col-8 col-md-3 offset-md-3 pt-2">
          {destination.name}
        </div>
        <div className="col-4 col-md-2">
          <button
            onClick={() => dispatch(detailDestination(destination))}
            className="btn btn-success form-control m-1"
          >
            Details
          </button>
        </div>
      </div>
    );
  });
}

export default DestinationList;
