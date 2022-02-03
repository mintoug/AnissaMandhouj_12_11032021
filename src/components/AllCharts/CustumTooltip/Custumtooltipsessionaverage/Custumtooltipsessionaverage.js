import PropTypes from "prop-types";
import React, { Component } from "react";

import '../Custumtooltipsessionaverage/Custumtooltipsessionaverage.css';

class Customtooltipsessionaverage extends Component {
    render() {
        const { payload, active } = this.props;

        if (active && payload) {
            return <p className="tooltipLineChart">{`${payload[0].value} min`}</p>;
        }
        return null;
    }
}

Customtooltipsessionaverage.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};

export default Customtooltipsessionaverage;

