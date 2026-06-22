import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Probleme from './components/sections/Probleme'
import Bifurcation from './components/sections/Bifurcation'
import CommentCaMarche from './components/sections/CommentCaMarche'
import Portfolio from './components/sections/Portfolio'
import BacASable from './components/sections/BacASable'
import FAQ from './components/sections/FAQ'
import CTAFinal from './components/sections/CTAFinal'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-fond">
      <Nav />
      <main>
        <Hero />
        <Probleme />
        <Bifurcation />
        <CommentCaMarche />
        <Portfolio />
        <BacASable />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}
