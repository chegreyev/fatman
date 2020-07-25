import React from 'react'

const FeaturesTilesCard = ({
    title , 
    description ,
    image
}) => {
    return (
        <div className="tiles-item reveal-from-bottom">
            <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                        {image}
                    </div>
                </div>
                <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                        {title}
                    </h4>
                    <p className="m-0 text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturesTilesCard