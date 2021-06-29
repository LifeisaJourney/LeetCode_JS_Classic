//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let starting = 0;
  let maxLength = 1;

  function expandMid(left,right){
    while (left >= 0 && right < s.length && s[left] === s[right]){
      const currentLength = right - left +1;
      if (currentLength > maxLength){
        maxLength=currentLength;
        starting = left;
      }
      left=left-1
      right = right+1 
    }
  }
  for (let i=0; i<s.length; i++){
    expandMid(i-1,i+1);
    expandMid(i,i+1);
  }
  return s.slice(starting,starting+maxLength);
}

module.exports = longestPalindrome;
