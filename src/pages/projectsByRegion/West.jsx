import React from 'react'
import Banner from '../../components/shared components/Banner'
import PropertiesByRegion from '../../components/shared components/PropertiesByRegion'

function West() {
  return (
	<div className='mt-16'>
	  <Banner heading="Properties in West Pune" bgImage="../bg_blur.png" />
	  <PropertiesByRegion region="West Pune" />
	</div>
  )
}

export default West
