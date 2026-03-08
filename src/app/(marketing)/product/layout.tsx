import React from "react";
export const metadata = {
  title: "Product",
};
const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ProductsLayout;
