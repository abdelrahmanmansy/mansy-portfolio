import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Home
