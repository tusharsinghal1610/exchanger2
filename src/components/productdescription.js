import React, { Component } from 'react';
import { Button, Grid, Image, Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import Header1 from './header'
function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'black'}}
        onClick={onClick}
      ></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'black'}}
        onClick={onClick}
      ></div>
    );
  }
  
export default class Productdes extends React.Component {
    render() {
        const settings = {
            dots: true,
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            initialSlide: 2,
            accessibility: true,
            autoplay:true,
            autoplaySpeed:2000,
            centerMode:true,
            pauseOnHover:true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                 <Header1/>  
                 <br/><br/><br/><br/>
                <Grid>
                <Grid.Column width={1}/>
                    <Grid.Column width={5}>
                        <Slider {...settings} >
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                            <div><Image src="Assets/wireframe.png" size="huge" /></div>
                        </Slider>
                        <br/>
                        <br/>
                        <center>
                        <Button primary>Cart it</Button>
                        <Button primary>Rent</Button>
                        <Button primary>Buy it</Button>
                        <Button primary>Contact</Button>
                        </center>
                    </Grid.Column>
                    <Grid.Column width={1}/>
                    <Grid.Column width={8}>
                    <Header
                    as='h2'
                    icon='browser'
                    content='Description'
                />
                    </Grid.Column>
                    <Grid.Column width={1}/>
                </Grid>
            </div>
        )
    }
}