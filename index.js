d3.select()
d3.selectAll()


d3.select('h1').style("color","red")
.attr('class','heading')
.text('Updated h1 tag')


d3.select('body').append('p').text('First Paraghraph')
d3.select('body').append('p').text('Second Paraghraph')
d3.select('body').append('p').text('Third Paraghraph')

d3.selectAll('p').style('color','purple')