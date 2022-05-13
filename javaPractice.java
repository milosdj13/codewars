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




// 5
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
public class SumArray {

  public static double sum(double[] numbers) {
    double sum = 0.0;
    for(int i=0; i<numbers.length; i++){
      sum+= numbers[i];
    }
    return sum;
  }
}




// 6
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
public class Alarm {
  
  public static boolean setAlarm(boolean employed, boolean vacation) {
    return employed && !vacation ? true : false;
  }
}



// 7
// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20
import java.util.Arrays;
public class Positive{

  public static int sum(int[] arr){
    return Arrays.stream(arr).filter( el -> el>0).sum();
  }
}
















