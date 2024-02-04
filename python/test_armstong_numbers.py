from armstrong_numbers import find_armstrong_numbers
import pytest

# def test_01_zero():
#     assert find_armstrong_numbers(0) == 0 

def test_02_zero_to_eight():
    assert find_armstrong_numbers(list(range(0, 8))) == [0, 1, 2, 3, 4, 5, 6, 7]

def test_03_zero_to_100():
    assert find_armstrong_numbers(list(range(0,100))) == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

def test_04_zero_to_999():
    assert find_armstrong_numbers(list(range(0,999))) == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]
