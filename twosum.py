def twoSum(nums, target):
    hashMap = {}  # Map to maintain nums O(1) look up

    for x in nums:  # Iterate through list

        y = target - x  # Complement

        if y in hashMap.keys():  # if Complement in keys return x, y
            return [x, y]
        else:
            hashMap[x] = True  # Else add to map and continue
    return []


testCase = {"array": [3, 5, -4, 8, 11, 1, -1, 6], "target": 10}


def run_tests():
    ans = twoSum(testCase['array'], testCase['target'])

    assert ans == [11, -1] or ans == [-1,
                                      11], f'Should be [11, -1], returned {ans}'

    print("All Tests Passed :)")


run_tests()
