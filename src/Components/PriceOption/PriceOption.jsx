import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='bg-blue-500 flex flex-col rounded-xl p-4 text-black font-bold'>
            <h2 className="text-center">
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <div className='ml-6 flex-grow'>
                <h1 className="text-2xl text-center">{name}</h1>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>

            <button className='mt-6 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Subscribe Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;