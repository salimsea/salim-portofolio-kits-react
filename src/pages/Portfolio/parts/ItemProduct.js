import React from "react";

const ItemProduct = ({ image, type, title, onModal }) => {
  return (
    <div className="col-md-4" data-aos="flip-left">
      <div className="card-project">
        <img src={image} className="img-project" alt="" />
        <div className="row bg-primary py-3 mx-0 px-2">
          <div className="col-md-8 text-left">
            <span>{type}</span>
            <h3>{title}</h3>
          </div>
          <div className="col-md-4 align-self-center text-end">
            <button type="button" className="btn btn-primary" onClick={onModal}>
              DETAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
