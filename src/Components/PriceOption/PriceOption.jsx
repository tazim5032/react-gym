import PropTypes from 'prop-types';
const PriceOption = ({option}) => {
    const {name, features, price} = option;
    return (
        <div>
            <li>{name} {features} {price}</li>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;