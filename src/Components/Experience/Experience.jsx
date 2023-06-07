import { Component, } from "react";
import Slider from "react-slick";
import ExpCard from '../ExpCard/ExpCard'
import bootstrap from '../../assets/boot.jpeg'
import react from '../../assets/react.png'
import tailwind from '../../assets/tails.png'
import javascript from '../../assets/javascript.png'
import node from '../../assets/node.png'
import express from '../../assets/ex.png'
import reactBootstrap from '../../assets/bootreact.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import { Fade } from "react-awesome-reveal";

export default class AutoPlay extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 1,
            cssEase: "linear",
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
                    <h2 className="text-center font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-white py-10">My Experience</h2>
                </Fade>
                <Slider {...settings} className="lg:mx-16 md:mx-16 sm:mx-12">

                    <div>
                        <ExpCard images={html} title="HTML"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={css} title="CSS"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={bootstrap} title="BootStrap"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={reactBootstrap} title="React BootStrap"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={tailwind} title="Tailwind"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={javascript} title="JavaScript"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={react} title="React"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={node} title="Node JS"></ExpCard>
                    </div>
                    <div>
                        <ExpCard images={express} title="Express"></ExpCard>
                    </div>



                </Slider>
            </div >
        );
    }
}