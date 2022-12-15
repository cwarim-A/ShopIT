import React from 'react'
import  { ProductsCatalogue,ProductsFilter } from '../components'


const home = () => {
  return (
    <div className="flex gap-4">
      <ProductsFilter/>
      <ProductsCatalogue/>
    </div>
  )
}

export default home
