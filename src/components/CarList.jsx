import { carsMock } from "../data/carsData";
import { FUEL_TYPES } from "../constants/car.constants";
import CarCard from "./CarCard";
import './CarCard.css'

const CarsList = () => {
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