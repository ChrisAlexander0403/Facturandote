import React from 'react';
import { useParams } from 'react-router';

import ContactComponent from '../components/contactForm/ContactComponent';

const Contact = () => {
    const { subject } = useParams();
    return(
        <>
            <ContactComponent subject={subject ? subject : false}/>
        </>
    );
}

export default Contact;