#!/usr/bin/python3
'''Log parsing'''

import sys

codes = {'200': 0, '301': 0, '400': 0, '401': 0, '403': 0,
                     '404': 0, '405': 0, '500': 0}
i = 0
total_size = 0
try:
    for line in sys.stdin:
        line_list = line.split(" ")

        if len(line_list) > 4:
            status_code = line_list[-2]
            file_size = int(line_list[-1])

            # check if the status code receive exists in the dictionary and
            # increment its count
            if status_code in codes.keys():
                codes[status_code] += 1

            # update total size
            total_size += file_size

            # update count of lines
            i += 1

        if i == 10:
            i = 0  # reset count
            print('File size: {}'.format(total_size))

            # print out status code counts
            for key, value in sorted(codes.items()):
                if value != 0:
                    print('{}: {}'.format(key, value))

except Exception as err:
    pass

finally:
    print('File size: {}'.format(total_size))
    for key, value in sorted(codes.items()):
        if value != 0:
            print('{}: {}'.format(key, value))