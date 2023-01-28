

import { VictoryChart, VictoryArea, VictoryTheme } from 'victory'
import { scaleDiscontinuous, discontinuityRange, discontinuityProvider, discontinuitySkipWeekends } from 'd3fc-discontinuous-scale';
import { scaleLinear, axisBottom, scaleTime } from 'd3-scale';
export const AreaGraph = ({data}) => {
    return (
        <VictoryChart >
            <VictoryArea
                data={data}
                style={{ data: { fill: 'lightblue', stroke: 'teal' } }}
                animate={{
                    duration: 1000,
                    onLoad: { duration: 1000 }
                }}
            />
        </VictoryChart>
    );
}