import React from "react";
import Heading2 from "../headings/heading2";

/**
 * Card1 component.
 * 
 */

function Card1({ heading, children, showBorder = true, showShadow = true, showPadding = true }) {
  return (
    <div className={`rounded-lg ${showPadding ? 'p-10' : ''} bg-white ${showBorder ? 'border-solid border-slate-200 border' : ''} ${showShadow ? 'shadow' : ''} mb-6`}>
      {heading && <Heading2>{heading}</Heading2>}
      {children}
    </div>
  );
}

export default Card1;
