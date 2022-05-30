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




// 19
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
public class BooleanToString {
  public static String convert(boolean b){
    return b ? "true" : "false";
  }
}




// 20
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
public class XO {
  
  public static boolean getXO (String str) {
    int x = 0;
    int o = 0;
    for(int i=0; i<str.length(); i++){
      if(str.charAt(i) == 'x' || str.charAt(i) == 'X'){
        x++;
      }else if(str.charAt(i) == 'o' || str.charAt(i) == 'O'){
        o++;
      }
    }
    if(x == o){
      return true;
    }
    return false;
  }
}





// 21
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
public class CountDig {
    public static int nbDig(int n, int d) {
      String[] arr = new String[n+1];
      for(int i=0; i<n+1; i++){
        arr[i] = Integer.toString(i*i);
      }

      String[] arr1 = String.join("", arr).split("");
      int count=0;
      for(int j=0; j<arr1.length; j++){
        if(arr1[j].equals(Integer.toString(d))){
          count++;
        }
      }
      return count;
    }
}




// 22
// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]
// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
public class Solution {
    public static String[] stringToArray(String s) {
      return s.split(" ");
    }
}





// 23
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
public class Solution {

    public static boolean check(Object[] a, Object x) {
        for(int i=0; i<a.length; i++){
          if(x == a[i]){
            return true;
          }
        }
      return false;
    }

}




// 24
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
public class Sid {
    public static String howMuchILoveYou(int nb_petals) {  
      return nb_petals % 6 == 1 ? "I love you" :
            nb_petals % 6 == 2 ? "a little" : 
            nb_petals % 6 == 3 ? "a lot" :    
            nb_petals % 6 == 4 ? "passionately" :
            nb_petals % 6 == 5 ? "madly" :
            nb_petals % 6 == 0 ? "not at all": "";
    }
}





// 25
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
// Find max(abs(length(x) − length(y)))
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
class MaxDiffLength {
    public static int mxdiflg(String[] a1, String[] a2) {
      int max = 0;  
      if(a1.length == 0 || a2.length == 0) return -1;
      for(int i=0; i< a1.length; i++){
          for(int j = 0 ; j<a2.length; j++){
            if(Math.abs(a1[i].length() - a2[j].length()) > max){
              max = Math.abs(a1[i].length() - a2[j].length());
            }
          }
        }
      return max;
    }
}





// 26
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
// All values will be positive integers or floats, or zero.
public class Plural{
  public static boolean isPlural(float f){
    return f!=1;
  }
}





// 27
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
public class Kata {

  public static int[] between(int a, int b) {
    int[] solution = new int[b-a+1];

      for(int i=a; i<=b; i++){
        solution[i-a] = i;
      }
      return solution;
  }
}




// 28
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
public class Kata {
  public static int toBinary(int n) {
    String solution = Integer.toBinaryString(n);
    return Integer.parseInt(solution);
  }
}






// 29
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
public class ZywOo {

  public static String warnTheSheep(String[] array) {
    if(array[array.length-1] == "wolf"){
      return "Pls go away and stop eating my sheep";
    }
    for(int i = 0; i<array.length; i++){
      if(array[i] == "wolf"){
        int index = array.length-i-1;
        return "Oi! Sheep number "+index+"! You are about to be eaten by a wolf!";
      }
    }
    return "";
  }

}





// 30
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
public class GrassHopper {

    public static char getGrade(int s1, int s2, int s3) {
      double avg = (s1+s2+s3)/3;
      if(avg<60) return 'F';
      if(avg<70) return 'D';
      if(avg<80) return 'C';
      if(avg<90) return 'B';
      return 'A';      
    }
}
















