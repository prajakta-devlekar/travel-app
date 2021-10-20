import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these amazing Destinations</h1>
            <div className='cards-container'>
                <div className='cards=wrapper'>
                    <ul className='cards-items'>
                        <CardItem 
                        src="../webimages/img-1.jpg"
                        text='Explore the hidden waterfall deep inside the Amazon Jungle'
                        path='./services'
                        label='Adventure'/>
                    
                   
                        <CardItem 
                        src='../webimages/img-9.jpg'
                        text='Travel through the Islands of Bali in a private cruise'
                        path='./services'
                        label='Luxury'/>
                   
            
                        <CardItem 
                        src=''
                        text='Experience the traditional culture of Singapore with its century-old temples'
                        path='./services'
                        label='Religious'/>
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}

export default Cards
