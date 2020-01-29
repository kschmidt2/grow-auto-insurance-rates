// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartId = document.getElementById("chart-container-auto-insurance");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartId.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartId, {
        chart: {
            type: 'tilemap',
            inverted: true,
            // styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: -20
        }, 
        title: {
            text: null
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
                dataLabels: {
                    enabled: true,
                    format: '{point.hc-a2}',
                    color: '#000000',
                    style: {
                        textOutline: false
                    }
                }
            }
        },
        xAxis: {
            visible: false
        },
           
        yAxis: {
            visible: false
        },
        colorAxis: {
            dataClasses: [{
                from: 600,
                to: 1099,
                color: '#cccfcf',
                name: 'under $1,100'
            }, {
                from: 1100,
                to: 1500,
                color: '#bceaa3',
                name: '$1,100-$1,500'
            }, {
                from: 1501,
                to: 1900,
                color: '#53b324',
                name: '$1,501-$1,900'
            }, {
                from: 1901,
                color: '#15A77B',
                name: '$1,901+'
            }]
        },
        series: [{
            name: '',
            data: [{
                'hc-a2': 'AL',
                name: 'Alabama',
                region: 'South',
                x: 6,
                y: 7,
                value: 1450
            }, {
                'hc-a2': 'AK',
                name: 'Alaska',
                region: 'West',
                x: 0,
                y: 0,
                value: 1275
            }, {
                'hc-a2': 'AZ',
                name: 'Arizona',
                region: 'West',
                x: 5,
                y: 3,
                value: 1470
            }, {
                'hc-a2': 'AR',
                name: 'Arkansas',
                region: 'South',
                x: 5,
                y: 6,
                value: 1698
            }, {
                'hc-a2': 'CA',
                name: 'California',
                region: 'West',
                x: 5,
                y: 2,
                value: 1868
            }, {
                'hc-a2': 'CO',
                name: 'Colorado',
                region: 'West',
                x: 4,
                y: 3,
                value: 1757
            }, {
                'hc-a2': 'CT',
                name: 'Connecticut',
                region: 'Northeast',
                x: 3,
                y: 11,
                value: 1696
            }, {
                'hc-a2': 'DE',
                name: 'Delaware',
                region: 'South',
                x: 4,
                y: 9,
                value: 1803
            }, {
                'hc-a2': 'DC',
                name: 'District of Columbia',
                region: 'South',
                x: 4,
                y: 10,
                value: 1383
            }, {
                'hc-a2': 'FL',
                name: 'Florida',
                region: 'South',
                x: 8,
                y: 8,
                value: 2309
            }, {
                'hc-a2': 'GA',
                name: 'Georgia',
                region: 'South',
                x: 7,
                y: 8,
                value: 1609
            }, {
                'hc-a2': 'HI',
                name: 'Hawaii',
                region: 'West',
                x: 8,
                y: 0,
                value: 1045
            }, {
                'hc-a2': 'ID',
                name: 'Idaho',
                region: 'West',
                x: 3,
                y: 2,
                value: 1164
            }, {
                'hc-a2': 'IL',
                name: 'Illinois',
                region: 'Midwest',
                x: 3,
                y: 6,
                value: 1303
            }, {
                'hc-a2': 'IN',
                name: 'Indiana',
                region: 'Midwest',
                x: 3,
                y: 7,
                value: 1165
            }, {
                'hc-a2': 'IA',
                name: 'Iowa',
                region: 'Midwest',
                x: 3,
                y: 5,
                value: 1106
            }, {
                'hc-a2': 'KS',
                name: 'Kansas',
                region: 'Midwest',
                x: 5,
                y: 5,
                value: 1622
            }, {
                'hc-a2': 'KY',
                name: 'Kentucky',
                region: 'South',
                x: 4,
                y: 6,
                value: 2208
            }, {
                'hc-a2': 'LA',
                name: 'Louisiana',
                region: 'South',
                x: 6,
                y: 5,
                value: 2379
            }, {
                'hc-a2': 'ME',
                name: 'Maine',
                region: 'Northeast',
                x: 0,
                y: 11,
                value: 935
            }, {
                'hc-a2': 'MD',
                name: 'Maryland',
                region: 'South',
                x: 4,
                y: 8,
                value: 1415
            }, {
                'hc-a2': 'MA',
                name: 'Massachusetts',
                region: 'Northeast',
                x: 2,
                y: 10,
                value: 1463
            }, {
                'hc-a2': 'MI',
                name: 'Michigan',
                region: 'Midwest',
                x: 2,
                y: 7,
                value: 3096
            }, {
                'hc-a2': 'MN',
                name: 'Minnesota',
                region: 'Midwest',
                x: 2,
                y: 4,
                value: 1319
            }, {
                'hc-a2': 'MS',
                name: 'Mississippi',
                region: 'South',
                x: 6,
                y: 6,
                value: 1587
            }, {
                'hc-a2': 'MO',
                name: 'Missouri',
                region: 'Midwest',
                x: 4,
                y: 5,
                value: 1736
            }, {
                'hc-a2': 'MT',
                name: 'Montana',
                region: 'West',
                x: 2,
                y: 2,
                value: 1534
            }, {
                'hc-a2': 'NE',
                name: 'Nebraska',
                region: 'Midwest',
                x: 4,
                y: 4,
                value: 1370
            }, {
                'hc-a2': 'NV',
                name: 'Nevada',
                region: 'West',
                x: 4,
                y: 2,
                value: 1974
            }, {
                'hc-a2': 'NH',
                name: 'New Hampshire',
                region: 'Northeast',
                x: 1,
                y: 11,
                value: 1037
            }, {
                'hc-a2': 'NJ',
                name: 'New Jersey',
                region: 'Northeast',
                x: 3,
                y: 10,
                value: 1592
            }, {
                'hc-a2': 'NM',
                name: 'New Mexico',
                region: 'West',
                x: 6,
                y: 3,
                value: 1334
            }, {
                'hc-a2': 'NY',
                name: 'New York',
                region: 'Northeast',
                x: 2,
                y: 9,
                value: 1704
            }, {
                'hc-a2': 'NC',
                name: 'North Carolina',
                region: 'South',
                x: 5,
                y: 9,
                value: 955
            }, {
                'hc-a2': 'ND',
                name: 'North Dakota',
                region: 'Midwest',
                x: 2,
                y: 3,
                value: 1379
            }, {
                'hc-a2': 'OH',
                name: 'Ohio',
                region: 'Midwest',
                x: 3,
                y: 8,
                value: 1047
            }, {
                'hc-a2': 'OK',
                name: 'Oklahoma',
                region: 'South',
                x: 6,
                y: 4,
                value: 1787
            }, {
                'hc-a2': 'OR',
                name: 'Oregon',
                region: 'West',
                x: 4,
                y: 1,
                value: 1463
            }, {
                'hc-a2': 'PA',
                name: 'Pennsylvania',
                region: 'Northeast',
                x: 3,
                y: 9,
                value: 1475
            }, {
                'hc-a2': 'RI',
                name: 'Rhode Island',
                region: 'Northeast',
                x: 2,
                y: 11,
                value: 2103
            }, {
                'hc-a2': 'SC',
                name: 'South Carolina',
                region: 'South',
                x: 6,
                y: 8,
                value: 1414
            }, {
                'hc-a2': 'SD',
                name: 'South Dakota',
                region: 'Midwest',
                x: 3,
                y: 4,
                value: 1708
            }, {
                'hc-a2': 'TN',
                name: 'Tennessee',
                region: 'South',
                x: 5,
                y: 7,
                value: 1570
            }, {
                'hc-a2': 'TX',
                name: 'Texas',
                region: 'South',
                x: 7,
                y: 4,
                value: 1415
            }, {
                'hc-a2': 'UT',
                name: 'Utah',
                region: 'West',
                x: 5,
                y: 4,
                value: 1306
            }, {
                'hc-a2': 'VT',
                name: 'Vermont',
                region: 'Northeast',
                x: 1,
                y: 10,
                value: 1156
            }, {
                'hc-a2': 'VA',
                name: 'Virginia',
                region: 'South',
                x: 5,
                y: 8,
                value: 1005
            }, {
                'hc-a2': 'WA',
                name: 'Washington',
                region: 'West',
                x: 2,
                y: 1,
                value: 1368
            }, {
                'hc-a2': 'WV',
                name: 'West Virginia',
                region: 'South',
                x: 4,
                y: 7,
                value: 1536
            }, {
                'hc-a2': 'WI',
                name: 'Wisconsin',
                region: 'Midwest',
                x: 2,
                y: 5,
                value: 1181
            }, {
                'hc-a2': 'WY',
                name: 'Wyoming',
                region: 'West',
                x: 3,
                y: 3,
                value: 1439
            }]
        }],
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: -10
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: -35,
                  spacingLeft: -10
                },
                legend: {
                    align: 'left',
                    itemMarginTop: 0
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}