import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';



const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://staging.appmate.in/Smavio-laravel-admin-dashboard/api',
  timeout: 180000,
  headers: { 'accept': 'application/json', 'Content-Type': 'application/json' },
  withCredentials: false,
});

const getAccessToken = () => {
  if (typeof window !== 'undefined') 
     return localStorage.getItem('token');
  else
    return false;
};

const accessToken = getAccessToken();

// if(accessToken != false && accessToken != null){
//   app.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
// }else{
//   console.log('server')
// }


export default app;
