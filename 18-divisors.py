def divisors(n):
    count = 1
    for num in range(n):
        if num !=0 and n % num == 0: count +=1
    return count