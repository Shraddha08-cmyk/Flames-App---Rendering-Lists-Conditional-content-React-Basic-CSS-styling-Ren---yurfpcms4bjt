import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component{

   render(){ 

    
    const handleSubmit = (event) =>{
       
        var name1 = document.getElementById("name1").value;
        var name2 = document.getElementById("name2").value;
        var result = document.getElementById("result");

        if(name1.length == 0 || name2.length == 0){

            result.innerHTML="Please Enter valid input";
            return;

        }