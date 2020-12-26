def twoSum(nums, target):
    hashMap = {}  # Map to maintain nums O(1) look up

    for x in nums:  # Iterate through list

        y = target - x  # Complement

        if y in hashMap.keys():  # if Complement in keys return x, y
            return [x, y]
        else:
            hashMap[x] = True  # Else add to map and continue
    return []

# Time Complexity is O(N) because we are only iterating through list once

# Space Complexity is O(N) because we are at worst keeping track of every element in list


def twoNumberSum(array, target):
    array.sort()  # O(NLogN)

    right = len(array) - 1  # Right Pointer
    left = 0  # Left Pointer

    while left < right:  # While Pointers don't overlap
        total = array[left] + array[right]  # Temp Sum
        if total == target:  # If temp sum is target return values
            return [array[left], array[right]]
        elif total < target:  # If less than move left pointer
            left += 1
        elif total > target:  # If Greater than move right pointer
            right -= 1
    return []

# Time Complexity is O(NLogN) assuming quick sort/ merge sort

# Space Complexity is O(1) since we aren't initiating a new hashmap


testCase = {"array": [3, 5, -4, 8, 11, 1, -1, 6], "target": 10}


def run_tests():
    answer = [[11, -1], [-1, 11]]
    ans = twoSum(testCase['array'], testCase['target'])

    ans2 = twoNumberSum(testCase['array'], testCase['target'])

    assert ans in answer, f'Should be [11, -1], returned {ans}'
    assert ans2 in answer, f'Should be [11, -1], returned {ans}'

    print("All Tests Passed :)")


run_tests()
