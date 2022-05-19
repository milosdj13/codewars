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




















