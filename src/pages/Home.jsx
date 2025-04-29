import React from 'react'
import ImageSlider from '../components/home/ImageSlider'
import PropertySearch from '../components/home/PropertySearch'
import ExploreAreas from '../components/home/ExploreAreas'
import AboutPropertyLook from '../components/home/AboutPropertyLook'
import ContactForm from '../components/home/ContactForm'

function Home() {
  return (
	<div>
	  <ImageSlider/>
	  <PropertySearch/>
	  <ExploreAreas/>
	  <AboutPropertyLook/>
	  <ContactForm/>
	</div>
  )
}

export default Home

