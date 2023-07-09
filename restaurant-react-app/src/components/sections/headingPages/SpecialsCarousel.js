import React from 'react';
import pizza1 from '../../../assets/food/product-1.jpg';
import pizza2 from '../../../assets/food/product-2.jpg';
import pizza3 from '../../../assets/food/product-3.jpg';
import pizza4 from '../../../assets/food/product-4.jpg';
import pizza5 from '../../../assets/food/product-5.jpeg';
import pizza6 from '../../../assets/food/product-6.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function CarouselPage() {
    return (
        <div>
                <SpecialCard image={pizza6} name="Greek Salad" price="$12.99" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <SpecialCard image={pizza5}name="Bruschetta" price="$16.99" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <SpecialCard image={pizza4} name="Pizza" price="$8.50" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <SpecialCard image={pizza1} name="Pizza" price="$17.69" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <SpecialCard image={pizza2}name="Pizza" price="$11.39" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <SpecialCard image={pizza3} name="Pizza" price="$19.50" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    )
}