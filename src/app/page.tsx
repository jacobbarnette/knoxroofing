import Image from 'next/image'

import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Navbar 
        link1='About Us'
        link1To='/about'
        link2='Contact Us'
        link2To='/contact'
        link3='Subscribe'
        link3To='/subscribe'/>
    </div>
      )
}
