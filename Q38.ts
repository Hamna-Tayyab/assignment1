function describe_city(city: string, country: string = " Pakistan"): void{
    console.log(`${city} is in ${country}.`);
    
}
describe_city("Lahore");
describe_city("Karachi","Pakistan");
describe_city("Kansas","Pakistan");