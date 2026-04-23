import CarCard from '../components/CarCard'
import { carsMock } from '../data/carsData'
import './Home.css'
import CarsList from '../components/CarList'

function Home() {
    return (
        <div className='home'>
            <h1>Главная страница</h1>
            <CarsList />
        </div>
    )
}

export default Home