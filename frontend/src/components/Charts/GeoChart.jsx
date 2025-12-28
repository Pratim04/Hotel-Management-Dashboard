import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoFeatures } from '../../Data/MockGeoFetures';
import { MockGeoData as data } from '../../Data/MockGeoData';
import './GeoChart.scss';

const GeoChart = () => {
    return (
        <div className='Geo-container'>
            <ResponsiveChoropleth
                data={data}
                features={geoFeatures.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={40}
                projectionTranslation={[0.5, 0.5]}
                // enableGraticule={true}
                // graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={[
                    {
                        anchor: 'bottom-left',
                        direction: 'column',
                        justify: true,
                        translateX: 20,
                        translateY: -20,
                        itemsSpacing: 1,
                        itemWidth: 94,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#444',
                        symbolSize: 18
                    }
                ]}
            />
        </div>
    );
};

export default GeoChart;
