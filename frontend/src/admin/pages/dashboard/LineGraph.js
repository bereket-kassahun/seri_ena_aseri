

import {VictoryChart, VictoryLine, VictoryTheme} from 'victory'
export const LineGraph = ({ data,  lineStroke = "#c43a31"}) => {

    return (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
                style={{
                    data: { stroke: lineStroke },
                    parent: { border: "2px solid #ccc" }
                }}
                data = {data}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 2000 }
                }}
            />
        </VictoryChart>
    )
}