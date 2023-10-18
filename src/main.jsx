import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' bg-[#F3F4FA] text-black'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
