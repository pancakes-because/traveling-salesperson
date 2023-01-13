// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [5, 10, 15, 20]

// Declare a variable to store the total. Initial value is 0.
let totalMilesTraveled = []
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMilesTraveled += miles
}

// Declare a new variable to store the average miles over time
const averageMilesTraveled = totalMilesTraveled / weeklyMiles.length

// Output the average miles and the total miles to the console
console.log(`I average ${averageMilesTraveled} miles each week.
    I have driven a total of ${totalMilesTraveled} miles.`) 