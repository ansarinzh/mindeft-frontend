import React from "react";
import { Button } from 'antd';
import Header from "../Components/Header";

function Home() {
    
  return (
    <>
    <Header />
    { localStorage.getItem('userId') ? <div>Login Successfull</div> : ''}
    </>
  );
}

export default Home;
