

var diameter = 500, //max size of the bubbles
    color    = d3.scale.category20b(); //color category

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#distribucion")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.csv("categorias.csv", function(error, data){

    //convert numerical values from strings to numbers
    data = data.map(function(d){ d.value = +d["cantidad"]; return d; });

    //bubbles needs very specific format, convert data to this.
    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();

    //create the bubbles
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) { return color(d.value); });

    //format the text for each bubble
    bubbles.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d["categoria"]; })
        .style({
            "fill":"white", 
            "font-family":"Helvetica Neue, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });
})


var pie = new d3pie("pieChart", {

    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 1200,
        "canvasHeight": 900,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
            "label" : "jQuery",
            "value" : 13,
            "color" : "#2484c1"
            },
            {
            "label" : "Ruby on Rails",
            "value" : 14,
            "color" : "#0c6197"
            },
            {
            "label" : "Git",
            "value" : 33,
            "color" : "#4daa4b"
            },
            {
            "label" : "Java",
            "value" : 21,
            "color" : "#90c469"
            },
            {
            "label" : "Backbone.js",
            "value" : 3,
            "color" : "#daca61"
            },
            {
            "label" : "NoSQL",
            "value" : 3,
            "color" : "#e4a14b"
            },
            {
            "label" : "Linux",
            "value" : 11,
            "color" : "#e98125"
            },
            {
            "label" : "C++",
            "value" : 8,
            "color" : "#cb2121"
            },
            {
            "label" : "Agile",
            "value" : 4,
            "color" : "#830909"
            },
            {
            "label" : "JavaScript",
            "value" : 11,
            "color" : "#923e99"
            },
            {
            "label" : "Lean",
            "value" : 2,
            "color" : "#ae83d5"
            },
            {
            "label" : "Web server",
            "value" : 10,
            "color" : "#bf273e"
            },
            {
            "label" : "UI Design",
            "value" : 9,
            "color" : "#ce2aeb"
            },
            {
            "label" : "Meteor",
            "value" : 2,
            "color" : "#bca44a"
            },
            {
            "label" : "MySQL",
            "value" : 38,
            "color" : "#618d1b"
            },
            {
            "label" : "Android",
            "value" : 34,
            "color" : "#1ee67b"
            },
            {
            "label" : "Adobe Suite",
            "value" : 5,
            "color" : "#b0ec44"
            },
            {
            "label" : "Titanium",
            "value" : 3,
            "color" : "#a4a0c9"
            },
            {
            "label" : "Internet of Things",
            "value" : 2,
            "color" : "#322849"
            },
            {
            "label" : "QA",
            "value" : 5,
            "color" : "#86f71a"
            },
            {
            "label" : "Web design",
            "value" : 4,
            "color" : "#2484c1"
            },
            {
            "label" : "Analytics",
            "value" : 4,
            "color" : "#0c6197"
            },
            {
            "label" : "Python",
            "value" : 26,
            "color" : "#4daa4b"
            },
            {
            "label" : "Marketing",
            "value" : 11,
            "color" : "#90c469"
            },
            {
            "label" : "DevOps",
            "value" : 3,
            "color" : "#daca61"
            },
            {
            "label" : "React",
            "value" : 5,
            "color" : "#e4a14b"
            },
            {
            "label" : "JSON",
            "value" : 11,
            "color" : "#e98125"
            },
            {
            "label" : "ActionScript",
            "value" : 2,
            "color" : "#cb2121"
            },
            {
            "label" : "Sysadmin",
            "value" : 2,
            "color" : "#830909"
            },
            {
            "label" : "AngularJS",
            "value" : 12,
            "color" : "#923e99"
            },
            {
            "label" : "SEO",
            "value" : 5,
            "color" : "#ae83d5"
            },
            {
            "label" : "SEM",
            "value" : 4,
            "color" : "#bf273e"
            },
            {
            "label" : "Ruby",
            "value" : 17,
            "color" : "#ce2aeb"
            },
            {
            "label" : "Front-End",
            "value" : 16,
            "color" : "#bca44a"
            },
            {
            "label" : "C",
            "value" : 8,
            "color" : "#618d1b"
            },
            {
            "label" : "Social Media",
            "value" : 4,
            "color" : "#1ee67b"
            },
            {
            "label" : "Drupal",
            "value" : 4,
            "color" : "#b0ec44"
            },
            {
            "label" : "Redis",
            "value" : 4,
            "color" : "#a4a0c9"
            },
            {
            "label" : ".Net",
            "value" : 7,
            "color" : "#322849"
            },
            {
            "label" : "iOS",
            "value" : 8,
            "color" : "#86f71a"
            },
            {
            "label" : "REST",
            "value" : 27,
            "color" : "#2484c1"
            },
            {
            "label" : "Django",
            "value" : 16,
            "color" : "#0c6197"
            },
            {
            "label" : "Graphic Design",
            "value" : 3,
            "color" : "#4daa4b"
            },
            {
            "label" : "Responsive",
            "value" : 4,
            "color" : "#90c469"
            },
            {
            "label" : "Objective-C",
            "value" : 8,
            "color" : "#daca61"
            },
            {
            "label" : "ASP",
            "value" : 4,
            "color" : "#e4a14b"
            },
            {
            "label" : "Usabilidad",
            "value" : 5,
            "color" : "#e98125"
            },
            {
            "label" : "HTML5",
            "value" : 44,
            "color" : "#cb2121"
            },
            {
            "label" : "JEE",
            "value" : 6,
            "color" : "#830909"
            },
            {
            "label" : "Oracle",
            "value" : 8,
            "color" : "#923e99"
            },
            {
            "label" : "Cake PHP",
            "value" : 3,
            "color" : "#ae83d5"
            },
            {
            "label" : "CSS",
            "value" : 40,
            "color" : "#bf273e"
            },
            {
            "label" : "Symfony",
            "value" : 8,
            "color" : "#ce2aeb"
            },
            {
            "label" : "Arquitectura de Informacion",
            "value" : 19,
            "color" : "#bca44a"
            },
            {
            "label" : "Excel",
            "value" : 5,
            "color" : "#618d1b"
            },
            {
            "label" : "PostgreSQL",
            "value" : 26,
            "color" : "#1ee67b"
            },
            {
            "label" : "UX",
            "value" : 32,
            "color" : "#b0ec44"
            },
            {
            "label" : "Blogger",
            "value" : 3,
            "color" : "#a4a0c9"
            },
            {
            "label" : "PhoneGap",
            "value" : 5,
            "color" : "#322849"
            },
            {
            "label" : "Swift",
            "value" : 7,
            "color" : "#86f71a"
            },
            {
            "label" : "Node.js",
            "value" : 16,
            "color" : "#2484c1"
            },
            {
            "label" : "C#",
            "value" : 4,
            "color" : "#0c6197"
            },
            {
            "label" : "WordPress",
            "value" : 11,
            "color" : "#4daa4b"
            },
            {
            "label" : "Oracle DB",
            "value" : 2,
            "color" : "#90c469"
            },
            {
            "label" : "SQL",
            "value" : 35,
            "color" : "#daca61"
            },
            {
            "label" : "Go",
            "value" : 2,
            "color" : "#e4a14b"
            },
            {
            "label" : "PHP",
            "value" : 23,
            "color" : "#e98125"
            },
            {
            "label" : "SVN",
            "value" : 2,
            "color" : "#cb2121"
            },
            {
            "label" : "Google Adwords",
            "value" : 3,
            "color" : "#830909"
            }
        ]
    },
    "labels": {
        "outer": {
            "pieDistance": 61
        },
        "inner": {
            "hideWhenLessThanPercentage": 4
        },
        "mainLabel": {
            "fontSize": 11
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": false
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} ofertas de Trabajo"
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        "onClickSegment": function(a) {
            var url = "https://www.getonbrd.cl/empleos/tag/" + a.data.label.toLowerCase().split(" ").join("-");
            window.location = url;    
        }
    }
});

var program = new d3pie("areas", {
    "header": {
        "title": {
            "text": "Programación",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "Según ofertas laborales de https://www.getonbrd.cl",
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 800,
        "canvasHeight": 600,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
            "label" : "jQuery",
            "value" : 13,
            "color" : "#2484c1"
            },
            {
            "label" : "Ruby on Rails",
            "value" : 13,
            "color" : "#0c6197"
            },
            {
            "label" : "Git",
            "value" : 25,
            "color" : "#4daa4b"
            },
            {
            "label" : "Java",
            "value" : 15,
            "color" : "#90c469"
            },
            {
            "label" : "Backbone.js",
            "value" : 3,
            "color" : "#daca61"
            },
            {
            "label" : "NoSQL",
            "value" : 3,
            "color" : "#e4a14b"
            },
            {
            "label" : "Linux",
            "value" : 6,
            "color" : "#e98125"
            },
            {
            "label" : "C++",
            "value" : 7,
            "color" : "#cb2121"
            },
            {
            "label" : "Agile",
            "value" : 2,
            "color" : "#830909"
            },
            {
            "label" : "JavaScript",
            "value" : 8,
            "color" : "#923e99"
            },
            {
            "label" : "Web server",
            "value" : 8,
            "color" : "#ae83d5"
            },
            {
            "label" : "Meteor",
            "value" : 2,
            "color" : "#bf273e"
            },
            {
            "label" : "MySQL",
            "value" : 37,
            "color" : "#ce2aeb"
            },
            {
            "label" : "Android",
            "value" : 9,
            "color" : "#bca44a"
            },
            {
            "label" : "Internet of Things",
            "value" : 2,
            "color" : "#618d1b"
            },
            {
            "label" : "Python",
            "value" : 24,
            "color" : "#1ee67b"
            },
            {
            "label" : "Marketing",
            "value" : 2,
            "color" : "#b0ec44"
            },
            {
            "label" : "React",
            "value" : 5,
            "color" : "#a4a0c9"
            },
            {
            "label" : "JSON",
            "value" : 4,
            "color" : "#322849"
            },
            {
            "label" : "AngularJS",
            "value" : 12,
            "color" : "#86f71a"
            },
            {
            "label" : "Ruby",
            "value" : 16,
            "color" : "#2484c1"
            },
            {
            "label" : "Front-End",
            "value" : 13,
            "color" : "#0c6197"
            },
            {
            "label" : "C",
            "value" : 7,
            "color" : "#4daa4b"
            },
            {
            "label" : "Drupal",
            "value" : 3,
            "color" : "#90c469"
            },
            {
            "label" : "Redis",
            "value" : 4,
            "color" : "#daca61"
            },
            {
            "label" : ".Net",
            "value" : 7,
            "color" : "#e4a14b"
            },
            {
            "label" : "REST",
            "value" : 19,
            "color" : "#e98125"
            },
            {
            "label" : "Django",
            "value" : 16,
            "color" : "#cb2121"
            },
            {
            "label" : "Objective-C",
            "value" : 2,
            "color" : "#830909"
            },
            {
            "label" : "ASP",
            "value" : 3,
            "color" : "#923e99"
            },
            {
            "label" : "HTML5",
            "value" : 35,
            "color" : "#ae83d5"
            },
            {
            "label" : "JEE",
            "value" : 4,
            "color" : "#bf273e"
            },
            {
            "label" : "Oracle",
            "value" : 7,
            "color" : "#ce2aeb"
            },
            {
            "label" : "Cake PHP",
            "value" : 3,
            "color" : "#bca44a"
            },
            {
            "label" : "CSS",
            "value" : 31,
            "color" : "#618d1b"
            },
            {
            "label" : "Symfony",
            "value" : 8,
            "color" : "#1ee67b"
            },
            {
            "label" : "Arquitectura de Información",
            "value" : 8,
            "color" : "#b0ec44"
            },
            {
            "label" : "Excel",
            "value" : 2,
            "color" : "#a4a0c9"
            },
            {
            "label" : "PostgreSQL",
            "value" : 26,
            "color" : "#322849"
            },
            {
            "label" : "UX",
            "value" : 9,
            "color" : "#86f71a"
            },
            {
            "label" : "PhoneGap",
            "value" : 2,
            "color" : "#2484c1"
            },
            {
            "label" : "Node.js",
            "value" : 16,
            "color" : "#0c6197"
            },
            {
            "label" : "C#",
            "value" : 3,
            "color" : "#4daa4b"
            },
            {
            "label" : "WordPress",
            "value" : 8,
            "color" : "#90c469"
            },
            {
            "label" : "Oracle DB",
            "value" : 2,
            "color" : "#daca61"
            },
            {
            "label" : "SQL",
            "value" : 29,
            "color" : "#e4a14b"
            },
            {
            "label" : "PHP",
            "value" : 20,
            "color" : "#e98125"
            }
        ]
    },
    "labels": {
        "outer": {
            "pieDistance": 90
        },
        "inner": {
            "hideWhenLessThanPercentage": 4
        },
        "mainLabel": {
            "fontSize": 10
        },
        "percentage": {
            "color": "#ffffff",
            "decimalPlaces": 0
        },
        "value": {
            "color": "#adadad",
            "fontSize": 11
        },
        "lines": {
            "enabled": true
        },
        "truncation": {
            "enabled": false
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {value} ofertas de Trabajo"
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "linear",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "gradient": {
            "enabled": true,
            "percentage": 100
        }
    },
    "callbacks": {
        "onClickSegment": function(a) {
            var url = "https://www.getonbrd.cl/empleos/tag/" + a.data.label.toLowerCase().split(" ").join("-");
            window.location = url;    
        }
    }
});

var mobile = new d3pie("areas", {
    "header": {
        "title": {
            "text": "Desarrollo Móvil",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "Según ofertas laborales de https://www.getonbrd.cl",
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 800,
        "canvasHeight": 600,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
            "label" : "Git",
            "value" : 4,
            "color" : "#2484c1"
            },
            {
            "label" : "Java",
            "value" : 5,
            "color" : "#0c6197"
            },
            {
            "label" : "Agile",
            "value" : 2,
            "color" : "#4daa4b"
            },
            {
            "label" : "JavaScript",
            "value" : 2,
            "color" : "#90c469"
            },
            {
            "label" : "Android",
            "value" : 23,
            "color" : "#daca61"
            },
            {
            "label" : "JSON",
            "value" : 6,
            "color" : "#e4a14b"
            },
            {
            "label" : "Swift",
            "value" : 6,
            "color" : "#e98125"
            },
            {
            "label" : "iOS",
            "value" : 8,
            "color" : "#cb2121"
            },
            {
            "label" : "REST",
            "value" : 7,
            "color" : "#830909"
            },
            {
            "label" : "Objective-C",
            "value" : 6,
            "color" : "#923e99"
            },
            {
            "label" : "Usabilidad",
            "value" : 2,
            "color" : "#ae83d5"
            },
            {
            "label" : "HTML5",
            "value" : 2,
            "color" : "#bf273e"
            },
            {
            "label" : "CSS",
            "value" : 2,
            "color" : "#ce2aeb"
            },
            {
            "label" : "UX",
            "value" : 4,
            "color" : "#bca44a"
            },
            {
            "label" : "PhoneGap",
            "value" : 3,
            "color" : "#618d1b"
            },
            {
            "label" : "Titanium",
            "value" : 3,
            "color" : "#1ee67b"
            },
            {
            "label" : "SQL",
            "value" : 2,
            "color" : "#b0ec44"
            },
            {
            "label" : "PHP",
            "value" : 2,
            "color" : "#a4a0c9"
            },
            {
            "label" : "Google Adwords",
            "value" : 3,
            "color" : "#e98125"
            }
                    ]
                },
                "labels": {
                    "outer": {
                        "pieDistance": 10
                    },
                    "inner": {
                        "hideWhenLessThanPercentage": 4
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#ffffff",
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#adadad",
                        "fontSize": 11
                    },
                    "lines": {
                        "enabled": true
                    },
                    "truncation": {
                        "enabled": false
                    }
                },
                "tooltips": {
                    "enabled": true,
                    "type": "placeholder",
                    "string": "{label}: {value} ofertas de Trabajo"
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "linear",
                        "speed": 400,
                        "size": 8
                    }
                },
                "misc": {
                    "gradient": {
                        "enabled": true,
                        "percentage": 100
                    }
                },
                "callbacks": {
                    "onClickSegment": function(a) {
                        var url = "https://www.getonbrd.cl/empleos/tag/" + a.data.label.toLowerCase().split(" ").join("-");
                        window.location = url;    
                    }
                }
});

var diseno = new d3pie("areas", {
    "header": {
        "title": {
            "text": "Diseño/UX",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "Según ofertas laborales de https://www.getonbrd.cl",
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 800,
        "canvasHeight": 600,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
            "label" : "Front-End",
            "value" : 2,
            "color" : "#2484c1"
            },
            {
            "label" : "Arquitectura de Información",
            "value" : 7,
            "color" : "#0c6197"
            },
            {
            "label" : "Git",
            "value" : 2,
            "color" : "#4daa4b"
            },
            {
            "label" : "UX",
            "value" : 16,
            "color" : "#90c469"
            },
            {
            "label" : "Web design",
            "value" : 3,
            "color" : "#daca61"
            },
            {
            "label" : "Graphic Design",
            "value" : 2,
            "color" : "#e4a14b"
            },
            {
            "label" : "UI Design",
            "value" : 7,
            "color" : "#e98125"
            },
            {
            "label" : "Usabilidad",
            "value" : 3,
            "color" : "#cb2121"
            },
            {
            "label" : "HTML5",
            "value" : 7,
            "color" : "#830909"
            },
            {
            "label" : "Responsive",
            "value" : 3,
            "color" : "#923e99"
            },
            {
            "label" : "WordPress",
            "value" : 2,
            "color" : "#ae83d5"
            },
            {
            "label" : "Adobe Suite",
            "value" : 5,
            "color" : "#bf273e"
            },
            {
            "label" : "Android",
            "value" : 2,
            "color" : "#ce2aeb"
            },
            {
            "label" : "CSS",
            "value" : 7,
            "color" : "#bca44a"
            }
                    ]
                },
                "labels": {
                    "outer": {
                        "pieDistance": 10
                    },
                    "inner": {
                        "hideWhenLessThanPercentage": 4
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#ffffff",
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#adadad",
                        "fontSize": 11
                    },
                    "lines": {
                        "enabled": true
                    },
                    "truncation": {
                        "enabled": false
                    }
                },
                "tooltips": {
                    "enabled": true,
                    "type": "placeholder",
                    "string": "{label}: {value} ofertas de Trabajo"
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "linear",
                        "speed": 400,
                        "size": 8
                    }
                },
                "misc": {
                    "gradient": {
                        "enabled": true,
                        "percentage": 100
                    }
                },
                "callbacks": {
                    "onClickSegment": function(a) {
                        var url = "https://www.getonbrd.cl/empleos/tag/" + a.data.label.toLowerCase().split(" ").join("-");
                        window.location = url;    
                    }
                }
});

var mkt = new d3pie("areas", {
    "header": {
        "title": {
            "text": "Marketing/Analytics",
            "fontSize": 24,
            "font": "open sans"
        },
        "subtitle": {
            "text": "Según ofertas laborales de https://www.getonbrd.cl",
            "color": "#999999",
            "fontSize": 12,
            "font": "open sans"
        },
        "titleSubtitlePadding": 9
    },
    "footer": {
        "color": "#999999",
        "fontSize": 10,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasWidth": 800,
        "canvasHeight": 600,
        "pieOuterRadius": "90%"
    },
    "data": {
        "sortOrder": "value-desc",
        "content": [
            {
            "label" : "UX",
            "value" : 2,
            "color" : "#2484c1"
            },
            {
            "label" : "Marketing",
            "value" : 7,
            "color" : "#0c6197"
            },
            {
            "label" : "Analytics",
            "value" : 3,
            "color" : "#4daa4b"
            },
            {
            "label" : "SQL",
            "value" : 2,
            "color" : "#90c469"
            },
            {
            "label" : "SEO",
            "value" : 4,
            "color" : "#daca61"
            },
            {
            "label" : "SEM",
            "value" : 4,
            "color" : "#e4a14b"
            },
            {
            "label" : "Google Adwords",
            "value" : 3,
            "color" : "#e98125"
            }
                    ]
                },
                "labels": {
                    "outer": {
                        "pieDistance": 10
                    },
                    "inner": {
                        "hideWhenLessThanPercentage": 4
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#ffffff",
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#adadad",
                        "fontSize": 11
                    },
                    "lines": {
                        "enabled": true
                    },
                    "truncation": {
                        "enabled": false
                    }
                },
                "tooltips": {
                    "enabled": true,
                    "type": "placeholder",
                    "string": "{label}: {value} ofertas de Trabajo"
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "linear",
                        "speed": 400,
                        "size": 8
                    }
                },
                "misc": {
                    "gradient": {
                        "enabled": true,
                        "percentage": 100
                    }
                },
                "callbacks": {
                    "onClickSegment": function(a) {
                        var url = "https://www.getonbrd.cl/empleos/tag/" + a.data.label.toLowerCase().split(" ").join("-");
                        window.location = url;    
                    }
                }
});