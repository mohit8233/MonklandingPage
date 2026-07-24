import React from 'react'
import Navbar from '../components/layout/Navbar'
import ContactHero from '../components/contacts/ContactHero'
import Footer from '../components/layout/Footer'
import ContactInfoCards from '../components/contacts/ContactInfoCards'
import OfficeLocations from '../components/contacts/OfficeLocations'
import ContactProcess from '../components/contacts/ContactProcess'

const ContactPage = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <ContactHero/>
            <ContactInfoCards/>
            <OfficeLocations/>
            <ContactProcess/>
        </main>
        <Footer/>
    </div>
  )
}

export default ContactPage