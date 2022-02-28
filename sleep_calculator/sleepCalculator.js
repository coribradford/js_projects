const getActualSleepHours = () => 
7 + 7 + 7 + 7 + 8 + 9 + 8;

const getIdealSleepHours = idealHours => {
  return (7 * idealHours)
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours(9)
  let sleep = idealSleepHours - actualSleepHours
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep!`)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You somehow got too much sleep. You overslept by ${sleep} hours.`)
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You didn't get enought sleep, you should get some rest. You need ${sleep} more hours of rest.`)
  }
}

calculateSleepDebt()