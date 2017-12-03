import React, { Component } from 'react'
export default class Productdes extends React.Component {
    render() {
        const settings = {
            dots: true,
            focusOnSelect: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 100,
            initialSlide: 2,
            accessibility: true
        };
        return (
            <div>
                <Grid>
                    <Grid.Column width={8}>
                        <Slider {...settings} >
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                        </Slider>
                        <Button primary>Primary</Button>
                        <Button primary>Primary</Button>
                        <Button primary>Primary</Button>
                        <Button primary>Primary</Button>
                    </Grid.Column>
                    <Grid.Column width={8}>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}