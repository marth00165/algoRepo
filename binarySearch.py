def binarySearch(array, target):
    left = 0  # Left Pointer
    right = len(array) - 1  # Right Pointer

    while left <= right:
        pointer = int((left + right)/2)  # Target Pointer

        testNum = array[pointer]  # Test Target

        if testNum == target:
            return pointer
        elif testNum < target:  # If target less remove all greater
            left = pointer + 1
        else:
            right = pointer - 1  # If target more remove all lesser

    return -1  # if not found return -1


# O(log(n)) Time Complexity | O(1) Space
testCase1 = {"array": [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], "target": 33}

print(binarySearch(testCase1['array'], testCase1['target']))
