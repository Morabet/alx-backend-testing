#!/usr/bin/python3


def isPrime(n: int) -> bool:
    """
    Checks if a number is prime.
    """

    for i in range(2, int(n/2) + 1):
        if n % i == 0:
            return False
    return True


def minOperations(n: int) -> int:
    """
    Calculates the minimum number of operations required to get n.
    """

    primes = []
    i = 2
    while i <= int(n/2):
        if n % i == 0:
            if isPrime(i):
                primes.append(i)
                n = int(n / i)
                i = 2
                continue
        i += 1
    if n > 1:
        primes.append(n)
    return sum(primes)
# def minOperations(n: int):

#     primes = []

#     for i in range(2, int(n/2) + 1):
#         if n % i == 0:
#             print(f"i = {i}")
#             if isPrime(i):
#                 primes.append(i)
#                 n = int(n / i)
#                 print(f"n = {n}")
#         if n == 1:
#             break
#     return primes
