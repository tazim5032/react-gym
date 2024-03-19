import PropTypes from 'prop-types';
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center align-center'><IoShieldCheckmarkOutline className='mr-2'></IoShieldCheckmarkOutline> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;