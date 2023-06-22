import Image from 'next/image'
import About from '../components/About'
import ImageWithForm from '../components/ImageWithForm'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <ImageWithForm/>
      <About />
    </div>
      )
}
