import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  let renderList = products.map((product) => {
    return (
      <div className="four column wide" key={product.id}>
        <Link to={`/products/${product.id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product.thumbnail} alt={product.brand} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta">{product.brand}</div>
              <div className="meta price">{product.price}</div>
            </div>
          </div>
        </div>
        </Link>
    </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
