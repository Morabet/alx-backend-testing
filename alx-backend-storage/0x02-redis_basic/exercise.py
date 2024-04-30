#!/usr/bin/env python3
"""" """
import redis
import uuid
from typing import Callable


class Cache():
    """"Represents an object for storing data in a Redis data storage."""

    def __init__(self):
        """Initializes a Cache instance"""
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: str | bytes | int | float) -> str:
        """Stores a value in a Redis data storage and returns the key"""
        random_key = str(uuid.uuid4)
        self._redis.set(random_key, data)
        return random_key
    
    def get(self, key: str, fn: Callable):
        """Retrieves a value from a Redis data storage"""
        value = self._redis.get(key)
        return fn(value) if fn is not None else value
    
    def get_str(self, key: str) ->str:
        """Retrieves a string value from a Redis data storage"""
        return self.get(key, str)
    
    def get_int(self, key: str) -> int:
        """Retrieves an integer value from a Redis data storage"""
        return self.get(key, int)