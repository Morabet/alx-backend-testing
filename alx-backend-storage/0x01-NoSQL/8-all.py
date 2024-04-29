#!/usr/bin/env python3
""" Task 8"""

from typing import List


def list_all(mongo_collection) -> List:
    """  lists all documents in a collection:"""

    # if mongo_collection.count_documents({}) == 0:
    #       return []
          
    return mongo_collection.find()
 