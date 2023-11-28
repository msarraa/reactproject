import React from "react";

const ProductButton = () => {
  return (
    <button className="btn btn-primary" onClick={() => window.location.href="/produkter"}>
      Se alla produkter
    </button>
  );
};

export default ProductButton;

