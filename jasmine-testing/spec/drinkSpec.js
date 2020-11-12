describe ("whatCanIDrink function", function(){

    beforeEach(function(){
        drink = new whatCanIDrink();
    });


decribe("checks age", function(){
 it ("should be defined", function(){
     expect(whatCanIDrink).toBeDefined();
 });

it ("should return drink Toddy when age is less than 14", function(){
expect(whatCanIDrink(13)).toBe("Drink Toddy");
});

it ("should return drink Coke if age is less than 18", function(){
expect(whatCanIDrink(17)).toBe("Drink Coke");
});

});
});