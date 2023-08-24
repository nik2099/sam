google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.load('current', {'packages':['line']});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {
/* ---------------------------------------------------------------------------------------------------------- column Chart custom start */	
	if ($("#columnChartFolie").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Folien", "Sitzungsdauer in Sekunden"],
        ["1", 250],
        ["2", 300],
        ["3", 400],
        ["4", 450],
			["5", 1170],
			["6", 460],
			["7", 450],
			["8", 300],
			["9", 660],
			["10", 1120],
      ]),
      b = {
        chart: {
          title: "",
          subtitle: ""
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
          colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "red"]


      },
    c = new google.charts.Bar(document.getElementById("columnChartFolie"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }
	if ($("#columnChartViews").length > 0) {
      var a = google.visualization.arrayToDataTable([
		["", "Views", "Absprungrate"],
		["1", 250, 20],
		["2", 300, 50],
		["3", 400, 20],
		["4", 450, 200],
		["5", 1170, 20],
		["6", 460, 40],
		["7", 450, 20],
		["8", 300, 60],
		["9", 660, 20],
		["10", 1120, 50],
      ]),
      b = {
        chart: {
          title: "",
          subtitle: ""
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
          colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "red"]


      },
    c = new google.charts.Bar(document.getElementById("columnChartViews"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }	
	if ($("#columnChartViewsDayTime").length > 0) {
      var a = google.visualization.arrayToDataTable([
		["Uhrzeit", "aktive Nutzer"],
		["0:00", 250],
		["1:00", 250],
		["2:00", 300],
		["3:00", 400],
		["4:00", 450],
		["5:00", 1170],
		["6:00", 460],
		["7:00", 450],
		["8:00", 300],
		["9:00", 660],
		["10:00", 400],
		["11:00", 1120],
		["12:00", 300],
		["13:00", 400],
		["14:00", 1120],
		["15:00", 460],
		["16:00", 400],
		["17:00", 1120],
		["18:00", 300],
		["19:00", 1120],
		["20:00", 460],
		["21:00", 400],
		["22:00", 1120],
		["23:00", 460],
      ]),
      b = {
        chart: {
          title: "",
          subtitle: ""
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
          colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "red"]


      },
    c = new google.charts.Bar(document.getElementById("columnChartViewsDayTime"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }		
	if ($("#columnChartViewsDays").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Tag der Woche", "aktive Nutzer"],
        ["Mo", 250],
        ["Di", 300],
        ["Mi", 400],
        ["Do", 450],
			["Fr", 1170],
			["Sa", 460],
			["So", 1120],
      ]),
      b = {
        chart: {
          title: "",
          subtitle: ""
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
          colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "red"]


      },
    c = new google.charts.Bar(document.getElementById("columnChartViewsDays"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }										
/* ---------------------------------------------------------------------------------------------------------- column Chart custom end */								
								
	
	
	
	
	
  if ($("#column-chart1").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
      ]),
      b = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
          colors: [vihoAdminConfig.primary, vihoAdminConfig.primary, "#e2c636"]


      },
    c = new google.charts.Bar(document.getElementById("column-chart1"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }
  if ($("#column-chart2").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
      ]),
      b = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        },
        bars: "horizontal",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
        colors: [vihoAdminConfig.primary, vihoAdminConfig.primary, "#e2c636"]
      },
      c = new google.charts.Bar(document.getElementById("column-chart2"));
      c.draw(a, google.charts.Bar.convertOptions(b))
  }
  
  
  
  
/* ---------------------------------------------------------------------------------------------------------- pie Chart custom start */ 
if ($("#pie-chart_01").length > 0) {
	var data = google.visualization.arrayToDataTable([
		['Task', 'Hours per Day'],
		['< 1 Minute',     5],
		['3 Minuten', 20]
	]);
	var options = {
		title: '',
		width:'100%',
		height: 500,
		colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary]
	};
	var chart = new google.visualization.PieChart(document.getElementById('pie-chart_01'));
	chart.draw(data, options);
}

if ($("#pie-chart_02").length > 0) {
	var data = google.visualization.arrayToDataTable([
		['Task', 'Hours per Day'],
		['Willkommen', 5],
		['Informationen', 10]
	]);
	var options = {
		title: '',
		width:'100%',
		height: 500,
		colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary]
	};
	var chart = new google.visualization.PieChart(document.getElementById('pie-chart_02'));
	chart.draw(data, options);
}
/* ---------------------------------------------------------------------------------------------------------- pie Chart custom end */   
  
  
  
  
  if ($("#pie-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     5],
        ['Eat',      10],
        ['Commute',  15],
        ['Watch TV', 20],
        ['Sleep',    25]
      ]);
      var options = {
        title: 'My Daily Activities',
        width:'100%',
        height: 300,
       colors: [vihoAdminConfig.primary, vihoAdminConfig.primary, "#e2c636", "#222222", "#717171"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart1'));
      chart.draw(data, options);
  }
  if ($("#pie-chart2").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     5],
        ['Eat',      10],
        ['Commute',  15],
        ['Watch TV', 20],
        ['Sleep',    25]
      ]);
      var options = {
        title: 'My Daily Activities',
        is3D: true,
        width:'100%',
        height: 300,
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#e2c636", "#222222", "#717171"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart2'));
      chart.draw(data, options);
  }
  if ($("#pie-chart3").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     2],
        ['Eat',      2],
        ['Commute',  11],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);
      var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
        width:'100%',
        height: 300,
        colors: [vihoAdminConfig.secondary, vihoAdminConfig.primary, "#222222", "#717171", "#e2c636"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart3'));
      chart.draw(data, options);
  }
  if ($("#pie-chart4").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Language', 'Speakers (in millions)'],
        ['Assamese', 13],
        ['Bengali', 83],
        ['Bodo', 1.4],
        ['Dogri', 2.3],
        ['Gujarati', 46],
        ['Hindi', 300],
        ['Kannada', 38],
        ['Kashmiri', 5.5],
        ['Konkani', 5],
        ['Maithili', 20],
        ['Malayalam', 33],
        ['Manipuri', 1.5],
        ['Marathi', 72],
        ['Nepali', 2.9],
        ['Oriya', 33],
        ['Punjabi', 29],
        ['Sanskrit', 0.01],
        ['Santhali', 6.5],
        ['Sindhi', 2.5],
        ['Tamil', 61],
        ['Telugu', 74],
        ['Urdu', 52]
      ]);
      var options = {
        title: 'Indian Language Use',
        legend: 'none',
        width:'100%',
        height: 400,
        pieSliceText: 'label',
        slices: {  4: {offset: 0.2},
          12: {offset: 0.3},
          14: {offset: 0.4},
          15: {offset: 0.5},
        },
          // colors: ["#ab8ce4", "#26c6da"]
          colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171", "#e2c636", "#d22d3d","#e6edef", vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171", "#e2c636","#d22d3d", vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171", "#e2c636", "#d22d3d", vihoAdminConfig.primary,vihoAdminConfig.secondary, "#222222"]
        };
        var chart = new google.visualization.PieChart(document.getElementById('pie-chart4'));
        chart.draw(data, options);
  }
  if ($("#line-chart").length > 0) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'month');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Age of Extinction');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 10.5, 32.4],
        [3,  40.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  20, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
      ]);
      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222"],
        height: 500,
        width:'100%',
      };
      var chart = new google.charts.Line(document.getElementById('line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
  if ($("#combo-chart").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ]);
      var options = {
        title : 'Monthly Coffee Production by Country',
        vAxis: {title: 'Cups'},
        hAxis: {title: 'Month'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        height: 500,
        width:'100%',
        colors: [vihoAdminConfig.secondary, vihoAdminConfig.primary, "#222222", "#717171", "#e2c636"]
    };
    var chart = new google.visualization.ComboChart(document.getElementById('combo-chart'));
    chart.draw(data, options);
  }
  if ($("#area-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
      ]);
      var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        width:'100%',
        height: 400,
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary]
      };
      var chart = new google.visualization.AreaChart(document.getElementById('area-chart1'));
      chart.draw(data, options);
  }
  if ($("#area-chart2").length > 0) {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Cars', 'Trucks' , 'Drones' , 'Segways'],
      ['2013',  100, 400, 2000, 400],
      ['2014',  500, 700, 530, 800],
      ['2015',  2000, 1000, 620, 120],
      ['2016',  120, 201, 2501, 540]
    ]);
    var options = {
      title: 'Company Performance',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0},
      width:'100%',
      height: 400,
      colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171"]
    };
    var chart = new google.visualization.AreaChart(document.getElementById('area-chart2'));
    chart.draw(data, options);
  }
  if ($("#area-chart-dashboard-default").length > 0) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Extinction');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 10.5, 32.4],
        [3,  40.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  20, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ]);
      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary , "#222222"],
        width:'100%',
        legend: {position: 'top'},
      };
      var chart = new google.charts.Line(document.getElementById('area-chart-dashboard-default'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
    if ($("#bar-chart2").length > 0) {
        var a = google.visualization.arrayToDataTable([
                ["Element", "Density", {
                    role: "style"
                }],
                ["Copper", 10, vihoAdminConfig.primary],
                ["Silver", 12, vihoAdminConfig.secondary],
                ["Gold", 14, "#222222"],
                ["Platinum", 16, "color: #717171"]
            ]),
            d = new google.visualization.DataView(a);
        d.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }, 2]);
        var b = {
                title: "Density of Precious Metals, in g/cm^3",
                width:'100%',
                height: 400,
                bar: {
                    groupWidth: "95%"
                },
                legend: {
                    position: "none"
                }
            },
            c = new google.visualization.BarChart(document.getElementById("bar-chart2"));
        c.draw(d, b)
    }
}

// Gantt chart
/*
google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}


function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['Research', 'Find sources', null,
            new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper', 'write',
            null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'Create bibliography', 'write',
            null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        ['Complete', 'Hand in paper', 'complete',
            null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'Outline paper', 'write',
            null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
    ]);

    var options = {
        height: 275,
        gantt: {
            criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
            arrow: {
                angle: 100,
                width: 5,
                color: vihoAdminConfig.secondary,
                radius: 0
            },

                palette: [
                    {
                        "color": vihoAdminConfig.primary,
                        "dark": vihoAdminConfig.primary,
                        "light": "#222222"
                    }
                ]

        }
    };
    var chart = new google.visualization.Gantt(document.getElementById('gantt_chart'));

    chart.draw(data, options);
}
*/
// word tree
/*
google.charts.load('current1', {packages:['wordtree']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data = google.visualization.arrayToDataTable(
        [ ['Phrases'],
            ['cats are better than dogs'],
            ['cats eat kibble'],
            ['cats are better than hamsters'],
            ['cats are awesome'],
            ['cats are people too'],
            ['cats eat mice'],
            ['cats meowing'],
            ['cats in the cradle'],
            ['cats eat mice'],
            ['cats in the cradle lyrics'],
            ['cats eat kibble'],
            ['cats for adoption'],
            ['cats are family'],
            ['cats eat mice'],
            ['cats are better than kittens'],
            ['cats are evil'],
            ['cats are weird'],
            ['cats eat mice']
        ]
    );

    var options = {
        wordtree: {
            format: 'implicit',
            word: 'cats'
        }

    };
    var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
    chart.draw(data, options);
}
*/