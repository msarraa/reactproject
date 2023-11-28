import React from "react";

const ProductButton = () => {
  return (
    <button onClick={() => window.location.href="/produkter"}>
      Se alla produkter
    </button>
  );
};

export default ProductButton;

