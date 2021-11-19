import React from 'react'
import { Line } from 'react-chartjs-2'

function Chart({chartData}) {
    
    return (
        <div>
           <Line
            data={chartData}
            options={{
                title:{
                display:true,
                text:'Price in USD',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
        </div>
    )
}

export default Chart
