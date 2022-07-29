import React, { useEffect } from "react";
//import styled from "styled-components";
import Menu from "./Menu";
import {selectUserName} from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate=useNavigate();
  const username=useSelector(selectUserName);
  useEffect(()=>{
    if(username){
      navigate("/home");
    }
  },[username])
  
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center Container"
      style={{ height: "100vh",width:'100%'}}
    >
      <Menu/>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ margin:'auto',padding:'40px'}}
      >
        <img src={require("../images/cta-logo-one.svg").default} 
        width='60%' />
        <div
          className="btn py-3 b-4 text-white mt-4"
          style={{ backgroundColor: "#1f80e0", width: "60%",letterSpacing:'2px' }}
        >
          GET ALL THERE
        </div>
        <div
          className="mt-4 d-block text-center"
          style={{ fontSize: "10px", letterSpacing: "2px",width:'60%' }}
        >
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription.
          </p>
          <p>
            As of 03/26/21, the price of Disney + and The Disney Bundle will
            increase by $1.
          </p>
        </div>
        <img
          src={require("../images/cta-logo-two.png")}
          width="60%"
          className="mt-3"
        />
      </div>
      <img
        src={require("../images/login-background.jpg")}
        style={{
          overflow: "hidden",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1,
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}



//---------------------------------------------
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   position: absolute;
//   text-align: center;
// `;
// const Contents = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const Bgi = styled.img`
// background-repeat: no-repeat;
// background-position: top;
// background-size:cover;
// background-image:url('file://images/login-background.jpg'));
// z-index=-1;
// position:absolute;
// height:100%;
// left:0;
// right:0;
// top:0;
// `;
