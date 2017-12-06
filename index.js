function produceDrivingRange(blockRange) {
  return function(start, end) {
    let routeStart = parseInt(start.replace(/(\d+)(st|nd|rd|th)/, "$1"))
    let routeEnd = parseInt(end.replace(/(\d+)(st|nd|rd|th)/, "$1"))
    let difference = blockRange - Math.abs(routeEnd - routeStart)
    if (difference >= 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent
  }
}

function createDriver() {
  let driverId = 0
  return class{
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
const Driver = createDriver()
