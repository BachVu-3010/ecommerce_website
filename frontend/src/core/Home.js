import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  // the default values of products and error are an empty array and false
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        console.log(data);
        setProducts(data);
      }
    });
  };

  // using useEffect as componentDidMount
  // useEffect accepts a callback as an argument

  useEffect(() => {
    loadAllProducts();
  }, []);

  // return (
  //   <Base title="Home Page" description="Welcome to Tshirt store">
  //     <h1>Home component</h1>
  //     <div className="row">
  //       {products.map((product, index) => {
  //         return (
  //           <div key={index} className="col-4 mb-4">
  //             <Card product={product} />
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </Base>
  // );

  return (
    <div>
      <h1>Home component</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index}>
              <h1>{product.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
