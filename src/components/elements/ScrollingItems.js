import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SectionHeader from '../sections/partials/SectionHeader';

import Image from '../elements/Image'
// list of items
const list = [
    { name: 'Алишер Серикбаевич' },
    { name: 'Учитель1' },
    { name: 'Учитель2' },
];

// One item component
// selected prop will be passed

// const MenuItem = ({text, selected}) => {
//     return <div
//         className={`menu-item ${selected ? 'active' : ''}`}
//     >{text}</div>;
// };

const MenuCardItem = ({text , selected}) => {
    return (
        <div className="card">
            <div className={`menu-item ${selected ? 'active' : ''}`}>
                <div className="card-container">
                    <Image 
                        className="card-image"
                        src={require('./../../assets/images/img_avatar.png')}
                        alt="card-teacher"
                        width={350}
                        height={299}
                    />
                    <h4><b>{text}</b></h4>
                    <p>Учитель математики</p>
                </div>
            </div>
        </div>
    )
}
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const {name} = el;

        return <MenuCardItem text={name} key={name} selected={selected} />;
});


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >
            {text}
        </div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

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
        title: 'Наши учителя',
        paragrapgh: 'Текст'
    }

    return (
            <div className="container">
                <div className="has-top-divider section-inner has-bottom-divider">
                    <div>
                        <SectionHeader data={sectionHeader} className="center-content" />
                    </div>
                    <ScrollMenu
                        data={menu}
                        // arrowLeft={ArrowLeft}
                        // arrowRight={ArrowRight}
                        selected={selected}
                        onSelect={this.onSelect}
                        transition={4}
                    />
                </div>
            </div>
        );
    }
}

export default ScrollingItems