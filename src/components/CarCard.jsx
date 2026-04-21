import './CarCard.css'

function CarCard({ car }) {
    return (
        <div className="car-card">
            <h2>{car.brand} {car.model}</h2>
            <p>Год: {car.year}</p>
            <p>Цена: {car.price.toLocaleString()} ₸</p>
            <p>Пробег: {car.mileage.toLocaleString()} км</p>
            <p>Топливо: {car.fuel}</p>
            <p>Коробка: {car.transmission}</p>
        </div>
    )
}

export default CarCard