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

  if(!props.comic){
    return <div>Loading...</div>
  }

  const comicClick =() => {
    window.open(`https://xkcd.com/${props.comic.num}`, '_blank')
  }

  return (
    <div>
        <header id="header">
          <div className="search-comic">
            <input type="text" className="form-control w-25 pull-right" placeholder="e.g. 123" onBlur={(e) => searchComic(e.target.value)} />
          </div>
          <div className="content text-center comic-title">
            <h2>{props.comic.title}</h2>
            <img src={props.comic.img} alt={props.comic.alt} onClick={() => comicClick()} title={props.comic.alt} />
          </div>
        </header>
    </div>
  );
}

const mapStateToProps=(state)=> {
  console.log('state', state);
  return state
}

export default UpdatedHomeComponent(connect(mapStateToProps, actionCreators)(Home));
