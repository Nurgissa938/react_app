import { useState, useEffect } from 'react';
import { getCars } from '../api/cars_api';
import { carsMock } from "../data/carsData";
import { FUEL_TYPES } from "../constants/car.constants";
import CarCard from "./CarCard";
import Loader from './Loader';
import './CarCard.css'

const CarsList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCars()
            .then(setCars)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>Ошибка: {error}</p>;
    const groupedCars = Object.groupBy(carsMock, (car) => car.fuel);

    return (
        <div>
            {Object.entries(groupedCars).map(([fuelValue, cars]) => {
                const fuelLabel = Object.values(FUEL_TYPES).find(
                    (f) => f.value === fuelValue
                )?.label;

                return (
                    <div key={fuelValue}>
                        <h2>{fuelLabel}</h2>
                        <div className="cards-grid">
                            {cars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CarsList;