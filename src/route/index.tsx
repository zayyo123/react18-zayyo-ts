import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))

const routes: RouteObject[] = [
  {
    //配置默认跳转
    path: '/',
    element: <Navigate to="/xxx" />
  },
  {
    path: '/discover',
    element: <Discover />, //(xxx组件)
    children: [
      //xxx  多级路由配置
    ]
  }
]
export default routes
