import Hero from '../components/Hero'
import JobList from '../components/JobList'
import HomeCard from '../components/HomeCard'

const Home = () => {
  return (
    <div>
        <Hero />
        <HomeCard />
        <JobList onHome={true} />
    </div>
  )
}

export default Home