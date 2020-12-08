- const directions = ['North', 'North East', 'East', 'South East', 'South', 'South West', 'West', 'North West']
.container
  each direction in directions
    .page
      .text(data-word=direction, data-scroll='out', data-splitting='', class=`text--${direction.toLowerCase().replace(' ', '-')}`)= directionconst { Splitting } = window
Splitting()
window.ScrollOut({
  scrollingElement: '.container',
  targets: '.text',
})
