///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    // 8kyu
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

public class Kata{
    public static String greet(String name){
        return "Hello, " + name + " how are you doing today?" ;
    }
}



// 2
// Write a function which converts the input string to uppercase.
class Upper{
    public static String MakeUpperCase(String str){
        return str.toUpperCase();
    }
}



// 3
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
public class Kata{
    public static int grow(int[] x){
   
        int solution = 1;
        for(int i = 0; i < x.length; i++){
            solution = solution * x[i];
        }
    
        return solution;  
    }
}



// 4
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.
public class TrafficLights {
    public static String updateLight(String current) {
        if(current == "green"){
            return "yellow";
        }else if(current == "red"){
            return "green";
        }else{
            return "red";
        }
    }
}