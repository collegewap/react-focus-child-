import React from "react";

const ChildComp = ({ childInputRef }) => {
  return (
    <div>
      <input ref={childInputRef} />
    </div>
  );
};

export default ChildComp;
