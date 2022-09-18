export function tagColor(status) {
  switch (status) {
    case 'completed' : return '#789764'
    case 'pending': return '#E59849'
    case 'canceled': return '#D66D4B'
    default : return ''
  }
}