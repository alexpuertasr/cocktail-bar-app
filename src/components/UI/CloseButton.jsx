import React from "react";
import { IconContext } from "react-icons";
import { GrClose } from "react-icons/gr";

function OrderButton({ ...rest }) {
  return (
    <div {...rest}>
      <IconContext.Provider value={{ color: "white", size: 64 }}>
        <GrClose />
      </IconContext.Provider>
    </div>
  );
}

export default OrderButton;
