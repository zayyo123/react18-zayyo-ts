import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Discover />, //(xxx组件)
    children: [
      //xxx  多级路由配置
    ]
  }
])
export default routes
