const arr = ["flower", "flow", "flight"]

const longestCommonPrefix = function (strs) {
    k = 0;
    firstPos = 0;
    longestPrefix = "";

    while (true) {
        if (strs.length === 0 || !strs[firstPos][k]) {
            return longestPrefix;
        }
        nextCharacter = strs[firstPos][k];
        for (j = 0; j < strs.length; j++) {
            if (strs[j][k] != nextCharacter) {
                console.log(longestPrefix);
                return
            }
        }
        k++;
        longestPrefix = `${longestPrefix}${nextCharacter}`;
    } 
};

longestCommonPrefix(arr)