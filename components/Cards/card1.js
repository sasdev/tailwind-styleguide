import React from "react";
<<<<<<< HEAD
import Heading2 from "../../components/headings/heading2";
=======
import Heading2 from "../headings/heading2";
>>>>>>> gh-pages

/**
 * Card1 component.
 * 
 */

function Card1({ heading, children, showBorder = true, showShadow = true, showPadding = true }) {
  return (
<<<<<<< HEAD
    <div className={`rounded-lg ${showPadding ? 'p-10' : ''} bg-white ${showBorder ? 'border-solid border-slate-200 border' : ''} ${showShadow ? 'shadow' : ''} mb-10`}>
=======
    <div className={`rounded-lg ${showPadding ? 'p-10' : ''} bg-white ${showBorder ? 'border-solid border-slate-200 border' : ''} ${showShadow ? 'shadow' : ''} mb-6`}>
>>>>>>> gh-pages
      {heading && <Heading2>{heading}</Heading2>}
      {children}
    </div>
  );
}

export default Card1;
