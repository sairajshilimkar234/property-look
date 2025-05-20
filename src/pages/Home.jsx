import React from 'react'
import ImageSlider from '../components/home/ImageSlider'
import PropertySearch from '../components/home/PropertySearch'
import ExploreAreas from '../components/home/ExploreAreas'
import AboutPropertyLook from '../components/home/AboutPropertyLook'
import ContactForm from '../components/home/ContactForm'
import EMICalculator from '../components/home/EMICalculator'

function Home() {
  return (
	<div>
	  <ImageSlider/>
	  <PropertySearch/>
	  <ExploreAreas/>
	  <AboutPropertyLook/>
	  <EMICalculator/>
	  <ContactForm/>
	</div>
  )
}

export default Home

