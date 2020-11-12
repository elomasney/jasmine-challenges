describe ("whatCanIDrink function", function(){

    beforeEach(function(){
        drink = new whatCanIDrink();
    });

describe("checks age", function(){
 it ("should be defined", function(){
     expect(whatCanIDrink).toBeDefined();
 });

it ("should return Drink Toddy when age is less than 14", function(){
    var result = whatCanIDrink(13)
    expect(whatCanIDrink(13)).toBe("Drink Toddy");
});

it ("should return Drink Coke when age is less than 18", function(){
    var result= whatCanIDrink(17)
    expect(whatCanIDrink(17)).toBe("Drink Coke");
});

it ("Should return Drink Beer when age is less than 21", function(){
    var result = whatCanIDrink(20)
    expect(whatCanIDrink(20)).toBe("Drink Beer");
});

it ("should return Drink Whisky if age is less than 130", function(){
    var result = whatCanIDrink(129)
    expect(whatCanIDrink(129)).toBe("Drink Whisky");
});

it ("should not be able to return a drink if age is greater than 130", function(){
    var result = whatCanIDrink(131)
    expect(whatCanIDrink(131)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
});
});
});
