const city_country = (city:string, country:string) => {
    return `"${city}, ${country}"`
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Chicago", "USA"));
console.log(city_country("Mumbai", "India"));
