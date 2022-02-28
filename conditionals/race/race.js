let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegisteredEarly = true
let runnerAge = 18

if (runnerRegisteredEarly && runnerAge > 18){
  raceNumber += 1000
  console.log(`Runner number ${raceNumber} will begin the race at 9:30am.`)
} else if (runnerAge > 18) {
  console.log(`Runner number ${raceNumber} will begin the race at 11:00am.`)
} else if (runnerAge < 18) {
  console.log(`Runner number ${raceNumber} will begin the race at 12:30pm.`)
} else {
  console.log(`Runner number ${raceNumber} please see the registration desk.`)
}