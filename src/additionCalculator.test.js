
import additionCalculator from "./additionCalculator";



test("addition of 4 and 6 to equal 10",() => {
    expect(additionCalculator(4,6)).toBe(10);
});

test( "addition of 100 ,24,32,23,21 to equal 200", () =>{
    expect(additionCalculator(100,24,32,23,21)).toBe(200);
});

test("addition of 7 to equal 7 ", () =>{
    expect(additionCalculator(7)).toBe(7);
});

test("addition of no argument provided to equal 0", ()=> {
    expect(additionCalculator(0)).toBe(0);
});

