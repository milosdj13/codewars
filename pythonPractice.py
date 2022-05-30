# 1
# You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
# Write a program that returns the girl's age (0-9) as an integer.
# Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
def get_age(age):
    return int(age[0])



# 2
# Is the string uppercase?
# Task
# Create a method is_uppercase() to see whether the string is ALL CAPS. For example:

# is_uppercase("c") == False
# is_uppercase("C") == True
# is_uppercase("hello I AM DONALD") == False
# is_uppercase("HELLO I AM DONALD") == True
# is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
# is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True
# In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
def is_uppercase(inp):
    return inp == inp.upper()



# 3
# Write a function that checks if a given string (case insensitive) is a palindrome.
def is_palindrome(s):
    return s.lower() == s[::-1].lower()




# 4
# You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
# Array can contain numbers or strings. X can be either.
# Return true if the array contains the value, false if not.
def check(seq, elem):
    for i in range(len(seq)):
        if(elem == seq[i]):
            return True
    return False




# 5
# Given an array of integers.
# Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
# If the input is an empty array or is null, return an empty array.

# Example
# For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
def count_positives_sum_negatives(arr):
    if arr==None or len(arr)==0:
        return []
    positive = 0
    negative = 0
    for i in arr:
        if i > 0:
            positive = positive+1
        if i < 0:
            negative = negative+i
            
    return [positive, negative]
        





# 6
# This kata is from check py.checkio.org
# You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

# Let's look at a few examples:
# array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
# array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
def index(array, n):
    for index, x in enumerate(array):
        if index == n:
            return x**n
    return -1    
    




# 7
# Simple, remove the spaces from the string, then return the resultant string.
def no_space(x):
    str = ""
    return str.join(x.split(" "))





# 8
# Kata Task
# I have a cat and a dog.
# I got them at the same time as kitten/puppy. That was humanYears years ago.
# Return their respective ages now as [humanYears,catYears,dogYears]
# NOTES:

# humanYears >= 1
# humanYears are whole numbers only
# Cat Years
# 15 cat years for first year
# +9 cat years for second year
# +4 cat years for each year after that
# Dog Years
# 15 dog years for first year
# +9 dog years for second year
# +5 dog years for each year after that
def human_years_cat_years_dog_years(human_years):
    cat = 0
    dog = 0
    if human_years > 2:
        cat = 15+9+4*(human_years-2)
        dog = 15+9+5*(human_years-2)
        return [human_years, cat, dog]
    elif human_years > 1:
        cat = 15+9
        dog = 15+9
        return [human_years, cat, dog]
    return [human_years, 15, 15]



# 9
# Make a function that returns the value multiplied by 50 and increased by 6.
# If the value entered is a string it should return "Error".
def problem(a):
    if isinstance(a, str):
        return "Error"
    return a*50+6




# 10
# Terminal game move function
# In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
# Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

# Example:
# move(3, 6) should equal 15
def move(position, roll):
    return position +roll*2




# 11
# You are given two interior angles (in degrees) of a triangle.
# Write a function to return the 3rd.
# Note: only positive integers will be tested.
def other_angle(a, b):
    return 180-a-b




# 12
# Trolls are attacking your comment section!
# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
# Note: for this kata y isn't considered a vowel.
def disemvowel(string):
    string = string.replace('a', '')
    string = string.replace('e', '')
    string = string.replace('i', '')
    string = string.replace('o', '')
    string = string.replace('u', '')
    string = string.replace('A', '')
    string = string.replace('E', '')
    string = string.replace('I', '')
    string = string.replace('O', '')
    string = string.replace('U', '')
    return string
    



# 13
# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
# (In this case, all triangles must have surface greater than 0 to be accepted).
def is_triangle(a, b, c):
    if a+b>c and b+c>a and c+a>b:
        return True
    return False




# 14
# Can you find the needle in the haystack?
# Write a function findNeedle() that takes an array full of junk but containing one "needle"
# After your function finds the needle it should return a message (as a string) that says:
# "found the needle at position " plus the index it found the needle, so:

# find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
# should return "found the needle at position 5" (in COBOL "found the needle at position 6")
def find_needle(haystack):
    for index, x in enumerate(haystack):
        if(x == 'needle'):
            return f"found the needle at position {index}"




# 15
# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
def repeat_str(repeat, string):
    return string*repeat





# 16
# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"
def reverse_words(text):
    text = text.split(' ')
    solution = []
    for word in text:
        solution.append(word[::-1])
    return ' '.join(solution)




# 17
# Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
# Examples:

# input:    output:
# 0    ->   0
# 2    ->   5
# 3    ->   5
# 12   ->   15
# 21   ->   25
# 30   ->   30
# -2   ->   0
# -5   ->   -5
# etc.
# Input may be any positive or negative integer (including 0).
# You can assume that all inputs are valid integers.
def round_to_next5(n):
    while n%5 != 0:
        n = n+1
    return n






# 18
# Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
# When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
# Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

# S is misinterpreted as 5
# O is misinterpreted as 0
# I is misinterpreted as 1
# The test cases contain numbers only by mistake.
def correct(s):
    solution = ""
    for i in s:
        if i == '0':
            i = 'O'
        if i == '1':
            i = 'I'
        if i == '5':
            i = 'S'
        solution = solution + i
    
    return solution






# 19
# Write a function which calculates the average of the numbers in a given list.
# Note: Empty arrays should return 0.
def find_average(numbers):
    sum = 0
    for i in numbers:
        sum = sum+i
    return sum/len(numbers)






# 20
# Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

# For example:
# solution([1,2,3,10,5]) # should return [1,2,3,5,10]
# solution(None) # should return []
def solution(nums):
    try:
        return sorted(nums)
    except:
        return []






# 21
# Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
# Write a function which takes a list of strings and returns each line prepended by the correct number.
# The numbering starts at 1. The format is n: string. Notice the colon and space in between.

# Examples:
# number([]) # => []
# number(["a", "b", "c"]) # => ["1: a", "2: b", "3: c"]
def number(lines):
    solution = [f"{index+1}: {x}" for index, x in enumerate(lines)]
    return solution






# 22
# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

# #Examples:
# Kata.getMiddle("test") should return "es"
# Kata.getMiddle("testing") should return "t"
# Kata.getMiddle("middle") should return "dd"
# Kata.getMiddle("A") should return "A"
# #Input
# A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
# #Output
# The middle character(s) of the word represented as a string.
def get_middle(s):
    solution = ""
    l = len(s)
    for index, x in enumerate(s):
        if l %2 == 0:
            if index == l/2-1 or index == l/2:
                solution = solution + x
        else:
            if index ==  (l-1)/2:
                solution = solution + x
        
    return solution




# 23
# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

# Examples (Input -> Output):
# * "String"      -> "SSttrriinngg"
# * "Hello World" -> "HHeelllloo  WWoorrlldd"
# * "1234!_ "     -> "11223344!!__  "
# Good Luck!
def double_char(s):
    sol = ""
    for i in s:
        sol = sol + i*2
    
    return sol





# 24
# Your task is to write function findSum.
# Upto and including n, this function will return the sum of all multiples of 3 and 5.

# For example:
# findSum(5) should return 8 (3 + 5)
# findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
def find(n):
    sum = 0
    for i in range(1, n+1):
        if i % 3 == 0 or i % 5 == 0:
            sum = sum + i
        
    return sum




# 25
# An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
# Note: anagrams are case insensitive
# Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

# Examples
# "foefet" is an anagram of "toffee"
# "Buckethead" is an anagram of "DeathCubeK"
def is_anagram(test, original):
    if sorted(test.lower()) == sorted(original.lower()):
        return True
    return False




# 26
# There was a test in your class and you passed it. Congratulations!
# But you're an ambitious person. You want to know if you're better than the average student in your class.
# You receive an array with your peers' test scores. Now calculate the average and compare your score!
# Return True if you're better, else False!
# Note:
# Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
def better_than_average(class_points, your_points):
    sum = your_points
    for i in class_points:
        sum = sum + i
    
    return sum/(len(class_points)+1) <= your_points




# 27
# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
def remove_char(s):
    return s[1:len(s)-1]





# 28
# Will you make it?
# # You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
def zero_fuel(distance_to_pump, mpg, fuel_left):
    return mpg * fuel_left >= distance_to_pump
    




# 29
# Debugging sayHello function
# The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
def say_hello(name):
    return "Hello, " + name





# 30
# Task:
# Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

# number	price (cents)
# n < 5	100
# n >= 5 and n < 10	95
# n >= 10	90
# You can use if..else or ternary operator to complete it.
def sale_hotdogs(n):
    if n<5:
        return n*100
    elif n<10:
        return n*95
    return n*90





# 31
# In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

# For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
# If you can, try writing it in only one line of code.
def find_multiples(integer, limit):
    current = integer
    arr = [] 
    while current <=limit:
        arr.append(current)
        current = current + integer
        
    return arr





# 32
# The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
# The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
# If the score < 0, return 0.

# For example:
# checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
# checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
# checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
# checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
def check_exam(arr1,arr2):
    solution = 0
    while len(arr1) > 0:
        ar1 = arr1.pop(0)
        ar2 = arr2.pop(0)
        if ar1 == ar2:
            solution = solution+4
        elif ar1=="" or ar2=="":
            solution = solution
        else:
            solution= solution-1
    return solution if solution>=0 else 0








