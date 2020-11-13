//Challenge 1
whatCanIDrink = function(age){
    if(age <0){
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    else if (age < 14){
        return "Drink Toddy";
    }
    else if (age < 18 && age > 14){
        return "Drink Coke";
    }
    else if(age < 21 && age > 18){
        return "Drink Beer";
    }
    else if (age <130 && age > 21){
        return "Drink Whisky";
    }
    else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}
//Challenge Two
fizzBuzz = function(number){
    if(number % 3 === 0 && number % 5 === 0 ){
        return "FizzBuzz";
    }

    else if (number % 3 === 0){
        return "Fizz";
    }
    else if (number % 5 === 0){
        return "Buzz";
    }
    else{
        return number;
    }
}