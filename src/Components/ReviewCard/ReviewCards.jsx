import { Component } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import { Fade } from "react-awesome-reveal";
import ClientImage from "../../assets/JabedPhoto.png"
export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <Fade direction="left" duration={2000}>
                    <h2 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white py-10 mt-16">Client Reviews</h2>
                </Fade>
                <Slider {...settings} className="lg:mx-16 md:mx-12 sm:mx-6">
                    <ReviewCard image={ClientImage}></ReviewCard>
                    <ReviewCard image={ClientImage}></ReviewCard>
                    <ReviewCard image={ClientImage}></ReviewCard>
                    <ReviewCard image={ClientImage}></ReviewCard>
                    <ReviewCard image={ClientImage}></ReviewCard>
                    <ReviewCard image={ClientImage}></ReviewCard>
                    <ReviewCard image={ClientImage}></ReviewCard>

                </Slider>
            </div>
        );
    }
}