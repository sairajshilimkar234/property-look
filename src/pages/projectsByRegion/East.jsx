import React from 'react'
import Banner from '../../components/shared components/Banner'
import PropertiesByRegion from '../../components/shared components/PropertiesByRegion'

function East() {
  return (
	<div className='mt-16'>
	  <Banner
	  heading="Properties in East Pune"
	  />
	  <PropertiesByRegion
	  region="East Pune"
	  />
	</div>
  )
}

export default East
