

import { VictoryChart, VictoryArea, VictoryTheme } from 'victory'
import { scaleDiscontinuous, discontinuityRange, discontinuityProvider, discontinuitySkipWeekends } from 'd3fc-discontinuous-scale';
import { scaleLinear, axisBottom, scaleTime } from 'd3-scale';
import { CChart } from '@coreui/react-chartjs';
export const AreaGraph = ({ data, title }) => {
    return (
        <CChart
            type="bar"
            data={{
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                    {
                        label: title,
                        backgroundColor: '#00A2E8',
                        data: data,
                    },
                ],
            }}
            labels="days"
        />
        // <VictoryChart >
        //     <VictoryArea
        //         data={data}
        //         style={{ data: { fill: 'lightblue', stroke: 'teal' } }}
        //         animate={{
        //             duration: 1000,
        //             onLoad: { duration: 1000 }
        //         }}
        //     />
        // </VictoryChart>
    );
}