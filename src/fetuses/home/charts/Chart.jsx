import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Chart() {
    const options = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                // height: 350,
                type: 'area',
                background: 'transparent',
                toolbar: {
                    show: false, // Hide the chart toolbar (optional)
                },
            },

            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ['#C89963'],
                lineCap: 'round',
                width: 2,
            },
            yaxis: {
                show: false
            },
            xaxis: {
                type: 'category',
                categories: ["May", "Jun", "July", "Aug", "Sep", "Oct", "Nov"]
            },
            fill: {
                colors: ['#C89963', '#ffffff'],
                type: "gradient",
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    // shadeIntensity: 1,
                    gradientToColors: ["#C89963"],
                    opacityFrom: 1,
                    opacityTo: 0,
                }
            },
            grid: {
                show: false
            },
            // tooltip: {
            //     x: {
            //         format: 'dd/MM/yy HH:mm'
            //     },
            // },
        },
    }

    return (
        <ReactApexChart
            options={options.options}
            series={options.series}
            type="area"
        // height={350}
        />
    )
}
