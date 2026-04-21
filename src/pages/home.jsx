import CarCard from '../components/CarCard'
import { carsMock } from '../data/carsData'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <h1>Главная страница</h1>
            <div className='home-grid'>
                {carsMock.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    )
}

export default Home