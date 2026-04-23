import { useParams } from 'react-router-dom'
import { carsMock } from '../data/carsData'
import { getFuelLabel, getTransmissionLabel } from "../constants/car.constants";

function CarDetail() {
    const { id } = useParams()
    const car = carsMock.find((c) => c.id === Number(id))

    if (!car) return <p>Машина не найдена</p>

    const fuelLabel = getFuelLabel(car.fuel);
    const transmissionLabel = getTransmissionLabel(car.transmission);

    return (
        <div>
            <h1>{car.brand} {car.model}</h1>
            <p>Год: {car.year}</p>
            <p>Цена: {car.price.toLocaleString()} ₸</p>
            <p>Пробег: {car.mileage.toLocaleString()} км</p>
            <p>Топливо: {fuelLabel}</p>
            <p>Коробка: {transmissionLabel}</p>
        </div>
    )
}

export default CarDetail