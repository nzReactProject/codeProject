import React, { Component } from 'react'
import Loadable from 'react-loadable'

const loadingComponent = ()=>{
  return (
    <div>
      loading...
    </div>
  )
}

export default (LoadComponent)=>{
  return Loadable({
    loader:LoadComponent,
    loading:loadingComponent
  })
}
