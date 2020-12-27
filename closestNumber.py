from collections import deque

# O(N) Time Complexity(at worst) / O(log(n)) (Average) | O(N) Space Complexity I think? cause of queue


def findClosestValueInBst(tree, target):
    q = deque([tree])  # Queue w first node
      curr = None  # Current Answer

       while q:
            node = q.popleft()  # Get Node
            if curr == None:
                curr = node.value  # Set Current Value

            if target > node.value:  # Go Right
                difference = target - node.value  # Difference with new node
                if abs(target - curr) > difference:  # Compare Differences
                    curr = node.value  # If new difference is smaller replace Value

                if node.right:  # Append Right Node
                    q.append(node.right)

            if target < node.value:  # Go left
                difference = node.value - target  # Difference w new node

                if abs(target - curr) > difference:  # Compare Differences
                    curr = node.value  # Updated Current Answer

                if node.left:  # Add Left Node to Queue
                    q.append(node.left)

            if target == node.value:  # If they are equal difference is 0
                return node.value

        return curr  # Return answer after traversing tree


# O(N) Time Compleixty | O(1) Space
def findClosestValueInBst(tree, target):
    return findClosestValueInBstHelper(tree, target, tree.value)


def findClosestValueInBstHelper(tree, target, closest):
	currentNode = tree # Curr Node
	while currentNode is not None: # Iterate through Branch
		if abs(target - closest) > abs(target - currentNode.value): # Calculate Difference
			closest = currentNode.value # Compare and update closest value
		if target < currentNode.value: # If target is less go left
			currentNode = currentNode.left
		elif target > currentNode.value: # If target is more go right
			currentNode = currentNode.right
		else: # If Current == Target
			break
	return closest # Return Answer


# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None



# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
