import React, { Component } from 'react';
import { Button, Grid, Image, Header, Dimmer, Loader } from 'semantic-ui-react';
import Slider from 'react-slick';
import Header1 from './header';
import Postad from './postad';

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black' }}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black' }}
            onClick={onClick}
        ></div>
    );
}

export default class Productdes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }
    componentDidMount(){
        console.log("componentdid mount");
        fetch('http://localhost:8080/product/description?productId=' + this.props.match.params.productId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                if (!responseJson.empty) {
                    this.setState({
                        active:false,
                        productName: responseJson.product.productName,
                        price: responseJson.product.price,
                        rent: responseJson.product.rent,
                        category: responseJson.product.category,
                        type: responseJson.product.type,
                        description: responseJson.product.description,
                        img1: responseJson.product.img1,
                        img2: responseJson.product.img2,
                        img3: responseJson.product.img3,
                        img4: responseJson.product.img4,
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                console.log("erooooooooooooooor");
            });
    }
    render() {
        const settings = {
            dots: true,
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            initialSlide: 1,
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: false,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const { active, productName, price, rent, category, type, description, img1,img2,img3,img4 } = this.state;
        return (
            <div>
                <Dimmer active={active}>
                    <Loader />
                </Dimmer>
                <Header1 />
                <br /><br /><br /><br />
                <Grid>
                    <Grid.Column width={1} />
                    <Grid.Column width={5}>
                        <Slider {...settings} >
                            {(img1)?<div><a href={"http://localhost:8080/images/"+img1}><Image src={"http://localhost:8080/images/"+img1} size="huge" /></a></div>:""}
                            {(img2)?<div><a href={"http://localhost:8080/images/"+img2}><Image src={"http://localhost:8080/images/"+img2} size="huge" /></a></div>:""}
                            {(img3)?<div><a href={"http://localhost:8080/images/"+img3}><Image src={"http://localhost:8080/images/"+img3} size="huge" /></a></div>:""}
                            {(img4)?<div><a href={"http://localhost:8080/images/"+img4}><Image src={"http://localhost:8080/images/"+img4} size="huge" /></a></div>:""}
                        </Slider>
                        <br />
                        <br />
                        <center>
                            {(sessionStorage.getItem(this.props.match.params.productId)) ?<Button primary> Decart it</Button> : <Button primary> Cart it</Button>}
                            <a href={"http://localhost:3000/instantbuy/" + this.props.match.params.productId}><Button primary>Rent/Buy</Button></a>
                            <Button primary>Contact</Button>
                        </center>
                    </Grid.Column>
                    <Grid.Column width={1} />
                    <Grid.Column width={8}>
                        <Header
                            as='h2'
                            icon='browser'
                            content='Description'
                        />
                        <Grid>
                           
                            <Grid.Column width={8}>
                                <b>Product Name:</b><br /><br />
                                <b>Category:</b><br /><br />
                                <b>Type:</b><br /><br />
                                <b>Buy Price:</b><br /><br />
                                <b>Rent Price:</b><br /><br />
                                <b>Description:</b>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <b>{productName}</b><br /><br />
                                <b>{category}</b><br /><br />
                                <b>{type}</b><br /><br />
                                <b>{(price) ? "Rs. " + price : "Not available"}</b><br /><br />
                                <b>{(rent) ? "Rs. " + rent : "Not available"}</b><br /><br />
                                <b>{description}</b>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={1} />
                </Grid>
                <Postad/>
            </div>
        )
    }
}