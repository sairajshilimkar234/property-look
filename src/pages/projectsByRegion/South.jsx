import React from 'react'
import Banner from '../../components/shared components/Banner'
import PropertiesByRegion from '../../components/shared components/PropertiesByRegion'

function South() {
  return (
	<div className='mt-16'>
	  <Banner
	  heading="Properties in South Pune"
	  />
	  <PropertiesByRegion region="South Pune" />
	</div>
  )
}

export default South
