import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

// list of items
const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' },
    { name: 'item10' },
    { name: 'item11' },
    { name: 'item12' },
    { name: 'item13' },
    { name: 'item14' },
    { name: 'item15' },
    { name: 'item16' },
    { name: 'item17' },
    { name: 'item18' }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const {name} = el;

        return <MenuItem text={name} key={name} selected={selected} />;
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

    return (
            <div className="container">
                <div className="has-top-divider section-inner">
                    <ScrollMenu
                        data={menu}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
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