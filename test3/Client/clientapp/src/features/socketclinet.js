import io from 'socket.io-client';

import {useDispatch} from "react-redux";
import {useEffect} from 'react';
import {updatedata} from './orders.js';
import { useAppDIspatch } from './redux-hooks.js';

const socket = io.connect("http://localhost:3001");



export const  Socketclientlistener = function(){

    const dispatch = useAppDIspatch();

    useEffect(()=>{
  
      socket.on("receive_message" , (data)=>{
        //console.log(data);
        dispatch(updatedata({data}));
        })
  
        
    },[socket]);
}

