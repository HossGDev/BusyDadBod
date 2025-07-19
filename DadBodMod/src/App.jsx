import Layout from './components/Layout.jsx';
import Grid from './components/Grid.jsx';
import Hero from './components/Hero.jsx';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    
    <Layout>
      <main>
        <Hero/>
        <Grid/>
      </main>
      <Analytics/>
    </Layout>
  )
}

export default App
