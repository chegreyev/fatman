import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SectionHeader from '../sections/partials/SectionHeader';

import Image from '../elements/Image'

import Review1 from '../../assets/images/review-1.jpg'
import Review2 from '../../assets/images/review-2.png'
import Review3 from '../../assets/images/review-3.jpg'

// list of items
const list = [
    {   
        name: "review1",
        image: Review1,
    },
    { 
        name: "review2",
        image: Review2,
    },
    { 
        name: "review3",
        image: Review3,
    },
];

const MenuCardItem = ({
    image,
    selected
}) => {
    return (
        <div className="card">
            <div className={`menu-item ${selected ? '' : 'active'}`}>
                <div className="card-container">
                    <Image 
                        className="card-image"
                        src={image}
                        alt="card-teacher"
                    />
                </div>
            </div>
        </div>
    )
}
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const {name , image} = el;

        return <MenuCardItem image={image} key={name} selected={selected} />;
});

const selected = 'item1';

class ScrollingItems extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

state = {
selected
};

onSelect = key => {
    this.setState({ selected: key });
}


render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    const sectionHeader ={
        title: 'Пікірлер',
        paragrapgh: 'Текст'
    }

    return (
            <div className="container" id="contact">
                <div className="has-top-divider section-inner has-bottom-divider">
                    <div>
                        <SectionHeader data={sectionHeader} className="center-content" />
                    </div>
                    <ScrollMenu
                        data={menu}
                        selected={selected}
                        onSelect={this.onSelect}
                        transition={2}
                    />
                </div>
            </div>
        );
    }
}

export default ScrollingItems