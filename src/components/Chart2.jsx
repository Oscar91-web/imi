import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const Chart2 = () => {

    // let p = 
    // {
    //     memory: Math.random() * 100,
    //     cpu: Math.random() * 100,
    //     network: Math.random() * 100,
    //     intervalID,
    //   }

    let intervalID = 10;
    let p =
    {
        memory: 80,
        cpu: 70,
        network: 70,
        intervalID,
    }
    // const intervalID = setInterval(() => {
    //     component.setState({
    //       memory: Math.random() * 100,
    //       cpu: Math.random() * 100,
    //       network: Math.random() * 100,
    //       intervalID,
    //     })
    //   }, 1000);

    let [params, setParams] = useState(p);

    useEffect(() => {
        // const intervalID = setInterval(() => {
        //     setParams({
        //         memory: Math.random() * 100,
        //         cpu: Math.random() * 100,
        //         network: Math.random() * 100,
        //         intervalID,
        //     })
        // }, 1000);
    });

    return (
        <div className={"my-pretty-chart-container"}>
            <Chart
                width={400}
                height={120}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Label', 'Value'],
                    ['Memory', params.memory],
                    ['CPU', params.cpu],
                    ['Network', params.network],
                ]}
                options={{
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 5,
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
}



export default Chart2;
