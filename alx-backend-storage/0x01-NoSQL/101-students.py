#!/usr/bin/env python3
""" Task 101"""


def top_students(mongo_collection):
    """ returns all students sorted by average score"""

    students = mongo_collection.aggregate([
        {"$project": {
            "_id": 1,
            "name": 1,
            "averageScore": {"$avg": "$topics.score"}
        }},
        {"$sort": {"averageScore": -1}}
    ])
    return students
    # students = mongo_collection.find()
    # students_list = []
    # for student in students:
    #     sum ,count = 0
    #     for top in student.get('topics'):
    #         sum += top.get('score')
    #         count += 1
    #     averageScore = sum / count
    #     students_list.append({
    #         '_id': student.get('_id'),
    #         'name': student.get('name'),
    #         'averageScore': averageScore
    #     })
    # students_list.sort(key=lambda item: item['averageScore'], reverse=True)
    # return students_list
