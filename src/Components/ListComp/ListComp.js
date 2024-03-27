import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ListComp.css';

const ListComp = () => {

    const [persons, setPersons] = useState([ //each curly braces represents a person
        {name: "Daniel", age: 22, city: "Sha'arey Tikva"},
        {name: "Ofer", age: 23, city: "Gay Town"},
        {name: "Nosi", age: 22, city: "Melbourne"}
    ])

    return (
        <div className="ListComp">
            Show us its working
        </div>
    )
}

ListComp.propTypes = {};

ListComp.defaultProps = {};

export default ListComp;
