/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../../action'
import UpdatedHomeComponent from './homeHOC';
import './home.css';

const Home = (props) => {
  
  useEffect(() => {
    props.loadComic();
  },[])

  const searchComic =(value) => {
    props.searchComic(value)
  }

  const comicClick =() => {
    window.open(`https://xkcd.com/${props.comic.num}`, '_blank')
  }

  const conditionalComponentRender = () =>{
    if(props.status === 'waiting'){
      return (
        <div className=" comic-loading text-center m-t-200">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }else if( props.status === 'received'){
      return (
        <div className="content text-center comic-title m-t-70">
          <h2>{props.comic.title}</h2>
          <img src={props.comic.img} alt={props.comic.alt} onClick={() => comicClick()} title={props.comic.alt} />
        </div>
      )
    }else{
      return (
        <div className="container m-t-200">
          <div className="row">
            <div className="comic-failed col text-center">
              <h6>Oh... Sorry you dont get any comic for this value, please enter another value.</h6>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <header id="header">
        <div className="search-comic">
          <input type="text" className="form-control w-25 pull-right" placeholder="e.g. 123" onBlur={(e) => searchComic(e.target.value)} />
        </div>
        {conditionalComponentRender()}
      </header>
    </div>
  );
}

const mapStateToProps=(state)=> {
  return state
}

export default UpdatedHomeComponent(connect(mapStateToProps, actionCreators)(Home));
