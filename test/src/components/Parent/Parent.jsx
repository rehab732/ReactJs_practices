import React, { Component } from 'react';
import Child from '../Child/Child';
class Parent extends Component {



  // state={
  //   productName:"Pro Name",
  //   productPrice:"$100.00",
  //   product:{id:10,name:"mac",count:100,onSale:false}
  // }

  state={
    products:[
      {id:0,name:"mac",count:100,onSale:false,category:"mobile"},
      {id:1,name:"mac",count:100,onSale:true,category:"mobile"},
      {id:2,name:"mac",count:100,onSale:true,category:"mobile"},
      {id:3,name:"mac",count:100,onSale:false,category:"mobile"},
      {id:4,name:"mac",count:100,onSale:true,category:"mobile"},
      {id:5,name:"mac",count:100,onSale:false,category:"mobile"},
      {id:6,name:"mac",count:100,onSale:true,category:"mobile"},

    ]
  }

  deleteproduct= (proid)=>
    {
      // console.log(`delete product number ${index}`);

      //1- clone
      let newproducte=[...this.state.products];//deep copy
      //2-action
      newproducte= newproducte.filter((product)=> product.id !== proid);
      this.setState({products:newproducte});
    }

  updateProduct=(proId)=>{

    let newpro=[...this.state.products];
    newpro[proId].count++;
    this.setState({products:newpro})

  }  

  render() {
    return (
      <>
      <div className="container bg-dark py-2">
        <div className="row">
        {/* <Child   proname={this.state.productName}  proprice={this.state.productPrice}  CompProduct={this.state.product}/> */}
        {/* <Child productInfo={this.state.products[0]} />
        <Child productInfo={this.state.products[1]} />
        <Child productInfo={this.state.products[2]} />
        <Child productInfo={this.state.products[3]} /> */}

        {this.state.products.map((product)=> <Child proInfo={product} delete={this.deleteproduct} update={this.updateProduct} />)}

        </div>
      </div>
      </>
    );
  }
}

export default Parent;
