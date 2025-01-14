import React, { Component } from 'react';
import { searchProducts } from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductGrid from './ProductGrid';
import SearchBar from './SearchBar';
import DropdownMenu from './DropdownMenu';
import DropdownMenuReact from './DropdownMenuReact';
import DropdownMenuPrice from './DropdownMenuPrice';
import Pagination from './Pagination';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    

    return (
      <div className='container main-app'>
        <div className='jumbotron text-center mt-4'>
          <h1>PRODUCTS</h1>
        </div>
        <div className='row mb-4'>
          <div className='col-md-5 mr-1'>
            <SearchBar />
          </div>
          <div className='col-md-6'>
            <div className='dropdown-menu-wrap'>
              <DropdownMenuReact />
              <DropdownMenuPrice />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            
            <ProductGrid />
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // products: state.products,
    // categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);