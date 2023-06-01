import React, { Component } from "react";

class Child extends Component {
  render() {
    // let { id, name, count } = this.props.CompProduct;
    let{id,name,count,onSale,category}=this.props.proInfo;
// console.log(this.props);
    return (
      <>
        {/* <h1>Chiled Comp</h1> */}
        {/* <h3>Product name from parent to Child {this.props.proname}</h3>
        <h3>Product price from parent to Child {this.props.proprice}</h3>
        <h3>Product price from parent to Child {this.props.CompProduct.name}</h3>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h1>{count}</h1> */}

        <div className="col-md-3">
          <div className="product p-2 border bg-white position-relative">
            <h2>id:{id}</h2>
            <h2>name:{name}</h2>
            <h2>category:{category}</h2>
            <h2>count:{count}</h2>
            {onSale===true?<div className="bg-danger p-1 text-white position-absolute top-0 end-0">Sale</div>:''}
            <button className="btn btn-info m-2" onClick={()=>this.props.update(id)}>Update</button>
            <button onClick={()=>this.props.delete(id)} className="btn btn-danger">Delete</button>

          </div>
        </div>
      </>
    );
  }
}

export default Child;
