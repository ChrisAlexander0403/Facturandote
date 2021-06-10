import React from 'react';
import Slider from '../components/slider/Slider';
import Container from '../components/infoIconsComponent/Container';
import GuideContainer from '../components/guideComponent/GuideContainer';

const Home = () => {
    return(
        <>
            <Slider/>
            <Container/>
            <GuideContainer/>
        </>
    );
}

export default Home;