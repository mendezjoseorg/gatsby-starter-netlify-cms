import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const texts = ['Servicios Personalizados', 'Consultoria', 'Talleres, Cursos y Conferencias', 'Bolsa de Trabajo'];
const links = [
  '/servicios/servicios-personalizados',
  '/servicios/consultoria',
  '/servicios/talleres-cursos-conferencias',
  '/servicios/bolsa-de-trabajo',
];

const FeatureGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map((item, i) => (
      <div key={item.text} className='column is-6'>
        <Link to={links[i]}>
          <section className='section'>
            <div className='has-text-centered'>
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <p className='has-text-centered is-size-4 no-hover-effect'>{texts[i]}</p>
            {/* <p>{item.text}</p> */}
          </section>
        </Link>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
