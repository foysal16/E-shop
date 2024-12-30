import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const newData = await response.json();

        if (isMounted) {
          setData(newData);
          setFilter(newData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getProduct();

    return () => {
      isMounted = false;
    };
  }, []);

  const filterProduct=(key)=>{
    const updateList = data.filter((x)=>x.category === key)
    setFilter(updateList)
  }

  const Loading = () => {
    return (
      <div className="col-md-3">
        <Skeleton height={350} />
        <Skeleton height={350} />
        <Skeleton height={350} />
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button type="button" className="btn btn-outline-primary me-3" onClick={()=>setFilter(data)}>
            All
          </button>
          <button type="button" className="btn btn-outline-primary me-3" onClick={()=>filterProduct("men's clothing")}>
            Mens Cloths
          </button>
          <button type="button" className="btn btn-outline-primary me-3" onClick={()=>filterProduct("women's clothing")}>
            Women Cloths
          </button>
          <button type="button" className="btn btn-outline-primary me-3" onClick={()=>filterProduct("jewelery")}>
            Jewelery
          </button>
          <button type="button" className="btn btn-outline-primary me-3" onClick={()=>filterProduct("electronic")}>
            Electronic
          </button>
        </div>
        <div className="row">
          {filter.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 text-center">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "250px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">${item.price}</p>
                  <a href="#" className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};
