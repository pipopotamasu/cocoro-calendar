export const today = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
  const day = ( "0" + today.getDate()).slice(-2)
  return { year, month, day, ymd: `${year}-${month}-${day}` }
}

export const calCalendarColor = () => {
  switch (progress) {
    case 0:
      return 'rgb(255,255,255)'
      break;
    case 0.2:
      return 'rgb(0,256,0)'
      break;
    case 0.4:
      return 'rgb(0,220,0)'
      break;
    case 0.6:
      return 'rgb(0,190,0)'
      break;
    case 0.8:
      return 'rgb(0,160,0)'
      break;
    case 1:
      return 'rgb(0,128,0)'
      break;
  }
}

export const calProgressColor = () => {
  switch (progress) {
    case 0:
      return 'rgb(0,0,0)'
      break;
    case 0.2:
      return 'rgb(0,256,0)'
      break;
    case 0.4:
      return 'rgb(0,220,0)'
      break;
    case 0.6:
      return 'rgb(0,190,0)'
      break;
    case 0.8:
      return 'rgb(0,160,0)'
      break;
    case 1:
      return 'rgb(0,128,0)'
      break;
  }
}