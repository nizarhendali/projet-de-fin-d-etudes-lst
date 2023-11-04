import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>
                Shop started up in 2022 with a clear international mission and with the intention of dressing young people who are engaged with their environment, who live in the community and relate to each other. Young people who have a casual dress sense, who shun stereotypes and who want to feel good in whatever they are wearing. To meet their needs, Shop takes the latest international trends, mixing them with the influences that are seen on the street and in the most fashionable clubs, and reworks them according to their style thus turning them into comfortable and easy-to-wear garments.

Shop evolves at the same pace as its customer, always watching out for new technologies, social movements and the latest artistic or musical trends. All of this can be seen reflected not only in its designs but also in stores. Inspired by the legendary Californian city of Palm Springs, the product lines are constantly being updated. All stores worldwide receive new merchandise twice a week.
                </p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>Shop brings the latest international trends to the street in the form of easy, comfortable and casual clothes. The Shop collections are conceived with the idea of dressing men and women with a young mindset, taking into account that age is not an obstacle when choosing our wardrobe.

Shop has two completely different lines for both guys and girls. On the one hand, teenagers will find the more casual lines in stores in the form of sweatshirts, t-shirts, jeans, Bermuda shorts, sneakers and hats, where cotton is the main fabric.

The second line is directed at more adult male and female consumers who have grown up with the brand. For them, Shop creates garments that are inspired by the latest international trends for both daytime and evening wear, and that can be worn at work and during leisure time. This line adapts these trends to the needs of Shop customers, making them more relaxed and turning them into easy-to-wear garments.

The textile collection is backed up by the footwear, accessory, jewelry, fragrance, headphones, longboard and sunglasses lines.</p>
                </div>
            </div>
        </>
    
    )
}

export default About
