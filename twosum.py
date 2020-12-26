def twoSum(nums, target):
    hashMap = {}

    for x in nums:

        y = target - x

        if y in hashMap.keys():
            return [x, y]
        else:
            hashMap[x] = True
    return []


testCase = {"array": [3, 5, -4, 8, 11, 1, -1, 6], "target": 10}


def run_tests():
    ans = twoSum(testCase['array'], testCase['target'])

    assert ans == [11, -1] or ans == [-1,
                                      11], f'Should be [11, -1], returned {ans}'

    print("All Tests Passed :)")


run_tests()
