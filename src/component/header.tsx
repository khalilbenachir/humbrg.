import React, { useState, useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import Hamburger from "./hamburger";

import {State} from './interfaces'

interface Props{
    history:History
}

const Header:React.FC<Props & RouteComponentProps<{}>> = (props) => {

    
    const [state,setState]=useState<State>({
        initial:false,
        clicked:null,
        menuName:'Menu'
    });

    const [disabled,setDisabled]=useState(false);

    useEffect(()=>{
        props.history.listen(()=>{
            setState({initial:null,clicked:false,menuName:"Menu"})
        })
    })

    const handleMenu=()=>{
        disabledMenu()
        console.log({state})
        if(state.initial===false){
            setState({
                initial:null,
                clicked:true,
                menuName:'Close'
            })
        }else if(state.clicked){
            setState({
                initial:null,
                clicked:!state.clicked,
                menuName:'Menu'
            })
        }else if(!state.clicked){
            setState({
                initial:null,
                clicked:!state.clicked,
                menuName:'Close'
            })
        }
    }

    const disabledMenu=()=>{
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    }
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>MENU</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state}/>
    </header>
  );
};

export default withRouter(Header);
