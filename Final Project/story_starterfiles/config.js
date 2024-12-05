var config = {
    style: 'mapbox://styles/yongxiao/cm1tjir7f00gv01pb4ufw4l2z',
    accessToken: 'pk.eyJ1IjoieW9uZ3hpYW8iLCJhIjoiY20xdGo0NTY2MDJ3cTJxcHJ3OW82YjZteiJ9.65aI1m2ArWDTjob1ilSsAA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'The Impact of Norfolk’s Light Rail Line and the Potential Future Light Rail in Virginia Beach on Urban Development',
    subtitle: ' ',
    byline: 'By Yongxiao Liu',
    para1:"Norfolk and Virginia Beach are two neighboring cities in Virginia. Norfolk has a light rail system for urban commuting that covers most of the city. The original plan for this light rail system was to extend it all the way to the Virginia Beach tourist area, but it was ultimately not implemented due to public opposition, leaving only an abandoned section of track. However, there have been ongoing calls for the rail extension, and the Norfolk-based architecture firm Hanbury has proposed a plan for the extension of the rail line.",
    para2:"This study analyzes the status of urban development around Norfolk's existing light rail line and stations to gain a basic understanding of this mode of transportation's influence. Then the study will attempt to predict the possible impacts of the new light rail line proposed by Hanbury on Virginia Beach. The significance of this research lies in its ability to help urban planners assess the feasibility and necessity of undertaking such a major project as constructing a light rail line in Virginia Beach.",
    footer: 'Source: City of Norfolk and City of Virginia Beach Website. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'left',
            hidden: false,
            title: '"The Tides"',
            description: 'In 2011, the city of Norfolk introduced "The Tide," a 7.2-mile light rail system. The total construction cost for the project was $318.5 million, with an $86 million cost overrun, and it was completed 20 months behind schedule. Clearly, this represents a significant financial burden on the city.',
            location: {
                center: [-76.28494, 36.85561],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               // {
             //   layer: 'future-land-use',
               // opacity: 0,
              //  duration: 0
               // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
                {
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            title: 'Impact through the Perspective of Land Use',
            description: 'By comparing Norfolk’s current zoning with the zoning code planned for implementation in the coming years, changes in land use types around the light rail line can be observed. These changes help to infer the potential impact of the light rail line construction on land use functions.',
            location: {
                center: [-76.28494, 36.85561],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'zoning',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'zoning',
                opacity: 0
                }
            ]
        },
                        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Impact through the Perspective of Land Use',
            description: 'Based on the current data, the main changes in land use functions around the light rail line include the conversion of some industrial and residential land into commercial and public service facility land. This indicates a trend of transformation towards service-oriented functions.',
            location: {
                center: [-76.28494, 36.85561],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'future-land-use',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'future-land-use',
                opacity: 0
                }
            ]
        },
                                {
            id: 'chapter4',
            alignment: 'left',
            hidden: false,
            title: 'Impact through the Perspective of Open Green Space ',
            description: 'By observing the distribution of green spaces around the Norfolk light rail line, the study found that there is no significant shortage of green spaces in areas near the light rail compared to other parts of the city. On the contrary, many small green parks have been constructed along the light rail line. This indicates that large-scale municipal projects like the light rail line do not significantly conflict with green spaces. To some extent, green spaces can also mitigate the negative impacts of the light rail line on the surrounding areas.',
            location: {
                center: [-76.28494, 36.85561],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'parks-city-of-norfolk',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'parks-city-of-norfolk',
                opacity: 0
                }
            ]
        },
                                        {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            title: 'Impact through the Perspective of Economic District ',
            description: ' The study selected Economic Districts, to indirectly represent land value, as land prices in these areas are typically higher. It was observed that the areas surrounding the light rail stations are where these zones are widely distributed. This indirectly suggests that the construction of the light rail line has a positive effect on increasing land prices in the surrounding areas.',
            location: {
                center: [-76.28494, 36.85561],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'economic-districts',
                opacity: 1,
                duration: 500
                }
            ],
            onChapterExit: [
                {
                layer: 'economic-districts',
                opacity: 0
                }
            ]
        },
                                         {
            id: 'chapter6',
            alignment: 'right',
            hidden: false,
            title: 'Proposed Light Rail in Virginia Beach',
            description: ' In 2016, developers in Virginia Beach wanted to extend Norfolk’s light rail to Virginia Beach. Their main arguments were: first, the new light rail line could enhance public transportation accessibility to the Virginia Beach waterfront tourist area, allowing people to reach the beach without having to drive every time, which could help alleviate traffic congestion to some extent. Additionally, more convenient public transportation could attract more visitors, thereby boosting the tourism economy. Second, the new light rail line would bring opportunities for TOD, as areas along the rail line and around the stations would be suitable for commercial development.However, there have been ongoing calls for the rail extension, and the Norfolk-based architecture firm Hanbury has proposed a plan for the extension of the rail line.',
            location: {
                center: [-76.06437, 36.83764],
                zoom: 11.46,
                pitch: 42.80,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               // {
               // layer: 'economic-districts',
              //  opacity: 1,
             //  duration: 500
              //  }
            ],
            onChapterExit: [
          //      {
            //    layer: 'economic-districts',
             //   opacity: 0
            //    }
            ]
        },
                                                 {
            id: 'chapter7',
            alignment: 'right',
            hidden: false,
            title: 'Potential Impact of Proposed Light Rail through the Perspective of Zoning',
            description: ' Based on the current land use in Virginia Beach, the area surrounding the proposed light rail line is primarily residential. These areas may transition to commercial use due to the improved accessibility provided by public transportation.',
            location: {
                center: [-76.06437, 36.83764],
                zoom: 13,
                pitch: 42.80,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
               layer: 'parcels-vb',
              opacity: 1,
             duration: 500
              }
            ],
            onChapterExit: [
          {
            layer: 'parcels-vb',
             opacity: 0
            }
            ]
        },
                                                    {
            id: 'chapter8',
            alignment: 'right',
            hidden: false,
            title: 'Potential Impact of Proposed Light Rail through the Perspective of Open Green Space',
            description: ' The area surrounding the proposed light rail line in Virginia Beach has a notable lack of public green spaces. The construction of the light rail line offers an opportunity to develop green parks along the corridor, which could mitigate the negative impacts of the light rail and increase the green space ratio.',
            location: {
                center: [-76.06437, 36.83764],
                zoom: 11.46,
                pitch: 42.80,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
               layer: 'vb-park-property',
              opacity: 1,
             duration: 500
              }
            ],
            onChapterExit: [
          {
            layer: 'vb-park-property',
             opacity: 0
            }
            ]
        },
                                                            {
            id: 'chapter9',
            alignment: 'right',
            hidden: false,
            title: 'Potential Impact of Proposed Light Rail through the Perspective of Accessibility',
            description: ' The study finally presented the locations of all Points of Interest with public service functions in Virginia Beach. It was observed that the area surrounding the proposed light rail line is one of the primary clusters of POIs. This suggests that the construction of the light rail line could enhance the convenience of living in the area.',
            location: {
                center: [-76.06437, 36.83764],
                zoom: 11.46,
                pitch: 42.80,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
               layer: 'points-of-interest',
              opacity: 1,
             duration: 500
              }
            ],
            onChapterExit: [
         {
          layer: 'points-of-interest',
            opacity: 0
           }
            ]
        },
    ]
};
