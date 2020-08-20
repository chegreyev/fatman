import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SectionHeader from '../sections/partials/SectionHeader';

import Image from '../elements/Image'

import Teacher1 from '../../assets/images/teacher_1.jpg'
import Teacher2 from '../../assets/images/teacher_2.jpg'
import Teacher3 from '../../assets/images/teacher_3.jpg'

// list of items
const list = [
    {
        name: 'Алишер Серикбаевич',
        image: Teacher1,
        subject: "Математика пәнінің мұғалімі"
    },
    { 
        name: 'Абдулла Несібелі',
        image: Teacher2,
        subject: "Ағылшын тілі пәнінің мұғалімі"
    },
    { 
        name: 'Тукубаева Камила',
        image: Teacher3,
        subject: "Математика пәнінің мұғалімі"
    },
];

// One item component
// selected prop will be passed

// const MenuItem = ({text, selected}) => {
//     return <div
//         className={`menu-item ${selected ? 'active' : ''}`}
//     >{text}</div>;
// };

const MenuCardItem = ({
    text,
    image,
    subject,
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
                    <h4 className="card__name">
                        <b>
                            {text}
                        </b>
                    </h4>
                    <p className="card__desc">
                        {subject}
                    </p>
                </div>
            </div>
        </div>
    )
}
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const {name , image , subject} = el;

        return <MenuCardItem subject={subject} image={image} text={name} key={name} selected={selected} />;
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
        title: 'Біздің мұғалімдер',
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
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
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