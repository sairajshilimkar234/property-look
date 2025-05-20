import React from 'react'
import ResidentialProperties from '../../components/projects/residential/Format'
import Banner from '../../components/shared components/Banner'

function Residential() {
  return (
	<div className='mt-16'>
		<Banner
		heading="Residential Properties"
		/>
	  <ResidentialProperties/>
	</div>
  )
}

export default Residential
