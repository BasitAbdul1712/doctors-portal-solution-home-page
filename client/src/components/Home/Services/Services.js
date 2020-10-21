import React from 'react';
import flourite from '../../../images/flourite.png';
import cavity from '../../../images/cavity.png';
import teethWhitening from '../../../images/teethWhitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: flourite,

    },
    {
        name: 'Cavity Filling',
        img: cavity,

    },
    {
        name: 'Teeth Whitening',
        img: teethWhitening,

    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 mt-5 pt-5 row">
                    {
                        serviceData.map(service =><ServiceDetails service={service} ></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;