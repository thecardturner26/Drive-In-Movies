import React from 'react';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import Nav from '../../components/Nav';

class foodPage  {

    render() {
        <>
            <Nav />
            <h1>
                food Page
            </h1>
        </>
    }
}


export default foodPage