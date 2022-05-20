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























