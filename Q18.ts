let placeToVisit:string[] = ["Shahi Qala", "Chaanga Maanga", "Zoo", "Park", "Museum" ]

console.log("Original Order:", placeToVisit); 

console.log("Alphabetical Order:", placeToVisit.slice().sort()); 

console.log("Original Order:", placeToVisit); 

console.log("Reverse Alphabetical Order:", placeToVisit.slice().sort().reverse()); 

console.log("Original Order:",placeToVisit); 

console.log("Reverse Order of List:", placeToVisit.slice().reverse()); 

placeToVisit.sort();
console.log("Sorted in Alphabetical Order:", placeToVisit);

placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placeToVisit);