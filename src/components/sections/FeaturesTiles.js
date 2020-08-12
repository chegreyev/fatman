import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

import FeaturesTilesCard from './partials/FeaturesTilesCard'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Біздің қызметтеріміз',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <FeaturesTilesCard 
              title={'Математика'}
              description={'Матемика пәнінен қазақ және орыс тілдерінде қосымша сабақтар.'}
              image={ 
                <Image
                  src={require('./../../assets/images/feature-tile-icon-01.svg')}
                  alt="Features tile icon 01"
                  width={64}
                  height={64}
                /> 
              }
          />

          <FeaturesTilesCard 
              title={'Ағылшын тілі'}
              description={'Ағылшын тілінен қазақ және орыс топтырына сабақтар.'}
              image={ 
                <Image
                  src={require('./../../assets/images/feature-tile-icon-02.svg')}
                  alt="Features tile icon 02"
                  width={64}
                  height={64} 
                />
              }
          />
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;