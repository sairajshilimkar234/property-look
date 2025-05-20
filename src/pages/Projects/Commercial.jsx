import React from 'react'
import Banner from '../../components/shared components/Banner'
import CommercialProperties from '../../components/projects/commercial/Format'

function Commercial() {
  return (
	<div className='mt-16'>
		<Banner
		heading="Commercial Properties"
		/>
		<CommercialProperties/>
	</div>
  )
}

export default Commercial
