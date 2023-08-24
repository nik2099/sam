import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';



const appbase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://staging.appmate.in/Smavio-laravel-admin-dashboard/api',
  timeout: 10000,
  headers: { 'accept': 'application/json', 'Content-Type': 'application/json' },
  withCredentials: true,
});


export default appbase;
