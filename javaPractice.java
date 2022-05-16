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




// 8
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
public class Sequence{

  public static int[] reverse(int n){
    int[] arr = new int[n];
    int index=0;
    for(int i=n; i>0; i--){
      arr[index]=i;
      index++;
    }
  return arr;
  }
}


// 9
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder

// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.
public class Kata {
    public static boolean checkForFactor(int base, int factor) {
      for(int i=1; i<=base; i++){
        if(factor*i == base){
          return true;
        }
      }
      return false;
    }
}



// 10
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
public class Calculate {
  public static String bmi(double weight, double height) {
    double bmi = weight/ (height*height);
    
    if(bmi<=18.5) return "Underweight";

    if(bmi<=25) return "Normal";
    
    if(bmi<=30) return "Overweight";
    
    return "Obese";
  }
}


// 11
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
public class Sid {
    public static int simpleMultiplication(int n) {
      return n%2==1 ? n*9 : n*8;
    }
}



// 12
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
public class Kata {
  public static String rps(String p1, String p2) {

    if(p1=="scissors" && p2=="paper"){
      return "Player 1 won!";
    }
    if(p1=="paper" && p2=="rock"){
      return "Player 1 won!";
    }
    if(p1=="rock" && p2=="scissors"){
      return "Player 1 won!";
    }
    if(p1.equals(p2)){
      return "Draw!";
    }
    return "Player 2 won!";
  }
}




// 13
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
public class BasicOperations
{
  public static Integer basicMath(String op, int v1, int v2)
  {
    return op.equals("+") ? v1+v2 : op.equals("-") ? v1-v2 : op.equals("*") ? v1*v2 : v1/v2;
  }
}




// 14
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
class FirstNonConsecutive {
    static Integer find(final int[] array) {
      int pre=0;
      for(int i=0; i<array.length; i++){
        if(i!=0 && pre+1 != array[i]){
          return array[i]; 
        }
        pre=array[i];
      }
      return null;
    }
}





// 15
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
public class Codewars {
  public static String oddOrEven (int[] array) {
    int sum = 0;
    for(int i=0; i<array.length; i++){
      sum+= array[i];
    }
    return sum%2==1 ? "odd" : "even";
  }
}




// 16
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
public class Kata {

  public static String solution(String str) {
    String solution = "";
    
    for(int i=str.length()-1; i>=0; i--){
      solution += str.charAt(i);
    }
    return solution;
  }
}



// 17
// Given an array of integers your solution should find the smallest integer.
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
      int min= args[0];
      
      for(int i = 0; i < args.length; i++){
        if(args[i] < min){
          min = args[i];
        }
      }
      return min;
    }
}





// 18
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
public class NumberFun {
  public static long findNextSquare(long sq) {
     long num =  Math.round(Math.sqrt(sq));
    
      if(num*num == sq){
        return (num+1) * (num+1);
        // return sq+num+num+1; also valid because of Example : 144 + 12+ 12+1 == 169== 13*13
      }else{
        return -1;
      }
    }
}







