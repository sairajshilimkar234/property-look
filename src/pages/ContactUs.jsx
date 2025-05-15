import React from 'react'
import ContactBanner from '../components/contact/ContactBanner'
import ContactDetails from '../components/contact/ContactDetails'

function ContactUs() {
  return (
	<>
	<div className='mt-15'>
		<ContactBanner/>
	</div>
		<ContactDetails/>
	</>
  )
}

export default ContactUs
