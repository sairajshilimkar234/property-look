import React from 'react'
import Banner from './Banner'

function SiteUnderMaintain() {
  return (
	<div className='mt-16'>
		<Banner
		heading="Site Under Maintenance"
		/>
		<div className="flex flex-col items-center justify-start h-screen bg-gray-100">
			<h1 className="text-3xl font-bold text-sky-800 mb-4 mt-5 ">Site Under Maintenance</h1>
			<p className="text-lg text-gray-600">We are currently working on the site. Please check back later.</p>
		</div>
	</div>
  )
}

export default SiteUnderMaintain
