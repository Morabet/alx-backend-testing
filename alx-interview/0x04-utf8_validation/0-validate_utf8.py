#!/usr/bin/python3
"""  UTF-8 Validation"""


def validUTF8(data):
    """ validatinf if data is a valid utf-8"""

    for num in data:
        bin_num = f'{num:08b}'
        len_bits = len(bin_num)
        if len_bits == 8 and bin_num[0] != "0":
            return False
        if len_bits > 8 and bin_num[-8:-6] != "10":
            return False

    return True


# def validUTF8(data):
#     # Variable to store the number of bytes required to represent the current character
#     bytes_to_follow = 0

#     # Iterate through each integer in the data
#     for num in data:
#         # Check if the current byte represents the start of a new character
#         if bytes_to_follow == 0:
#             # Count the number of leading 1s to determine the number of bytes for the character
#             mask = 0b10000000
#             while mask & num:
#                 bytes_to_follow += 1
#                 mask >>= 1

#             # If the number of bytes for the character is invalid, return False
#             if bytes_to_follow == 1 or bytes_to_follow > 4:
#                 return False

#             # For characters represented by only one byte
#             if bytes_to_follow == 0:
#                 continue

#         else:
#             # For continuation bytes, check if the two most significant bits are '10'
#             if num >> 6 != 0b10:
#                 return False

#         # Decrement the number of bytes to follow
#         bytes_to_follow -= 1

#     # If all bytes are validated, return True
#     return bytes_to_follow == 0
