# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):

    armstrongs = []
    num_list = []

    if type(numbers) == int:
        num_list.append(numbers)
        numbers = num_list

      
    for num in numbers:

        if num < 10:
            armstrongs.append(num)

        else:
            digits = [int(x) for x in str(num)]
            power = len(digits)
            sum = 0

            for i in range(power):
                sum += digits[i]**power
            if sum == num:
                armstrongs.append(num)
    
    return armstrongs
