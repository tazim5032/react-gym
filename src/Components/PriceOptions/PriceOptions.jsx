import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to basic gym facilities",
            "Limited group classes",
            "No contract commitment"
          ],
          "price": 30
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to premium gym facilities including personal trainer sessions",
            "Unlimited group classes",
            "Flexible contract options"
          ],
          "price": 50
        },
        {
          "id": 3,
          "name": "Student Membership",
          "features": [
            "Discounted membership for students",
            "Access to basic gym facilities",
            "No contract commitment"
          ],
          "price": 20
        },
        {
          "id": 4,
          "name": "Annual Membership",
          "features": [
            "Discounted rate for an entire year",
            "Access to basic and premium gym facilities",
            "Unlimited group classes",
            "Personal trainer sessions included"
          ],
          "price": 300
        }
      ]
      
    return (
        <div>
            <h1 className="text-2xl">Best Prices</h1>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;