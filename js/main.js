//grafica de pastel
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Champiñones', 1.5],
      ['Cebollas', 0.5],
      ['Aceitunas', 0.1],
      ['Queso', 5],
      ['Pepperoni', 3],
      ['Jamón', 1],
      ['Piña', 3]
    ]);

    // Set chart options
    var options = {'title':'¿Cuánta pizza comiste anoche?',
                  'width':450,
                  'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('grafica'));
    chart.draw(data, options);
  }

//Sankey Diagram
google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawSan);
  function drawSan() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
      [ 'A', 'X', 5 ],
      [ 'A', 'Y', 7 ],
      [ 'A', 'Z', 6 ],
      [ 'B', 'X', 2 ],
      [ 'B', 'Y', 9 ],
      [ 'B', 'Z', 4 ]
    ]);    
    var optionsSan = {
      width: 600,
    };
    var chartSan = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chartSan.draw(data, optionsSan);
  }

// Word Trees
google.charts.load('current', {packages:['wordtree']});
google.charts.setOnLoadCallback(drawTree);
  function drawTree() {
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
        ['cats eat mice'],
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

//Candlestick 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCan);
  function drawCan() {
    var data = google.visualization.arrayToDataTable([
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]      
    ], true);
    var options = {
      legend:'none'
    };
    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_can'));
    chart.draw(data, options);
  }

//Gant
google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawGant);
  function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
  function drawGant() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
      ['Research', 'Find sources',
        new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper',
        null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
      ['Cite', 'Create bibliography',
        null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
      ['Complete', 'Hand in paper',
        null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
      ['Outline', 'Outline paper',
        null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
    ]);
    var options = {
      height: 275
    };
    var chart = new google.visualization.Gantt(document.getElementById('chart_Gant'));
    chart.draw(data, options);
  }

//Geo
google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);
    var options = {};
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  }