// https://leetcode.com/problems/subdomain-visit-count/

/*

811. Subdomain Visit Count
Easy

551

711

Add to List

Share
A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

Example 1:
Input:
["9001 discuss.leetcode.com"]
Output:
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation:
We only have one website domain: "discuss.leetcode.com". As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

Example 2:
Input:
["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
Output:
["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
Explanation:
We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times. For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

Notes:

The length of cpdomains will not exceed 100.
The length of each domain name will not exceed 100.
Each address will have either 1 or 2 "." characters.
The input count in any count-paired domain will not exceed 10000.
The answer output can be returned in any order.


 {
   ""google.mail.com": 900,
   "mail.com"": 901;
   "com": 952
   intel.mail.com",
   "50 yahoo.com": 50.
   "wiki.org": 5,
   "0rg": 5
 }

 */

const subdomainVisits = (array) => {
    let domainMap = makeMap(array);

    return [...domainMap.entries()].map(subDomain => `${subDomain[1]} ${subDomain[0]}`);
  }

  const makeMap = (array) => {
    let map = new Map();
    for (let domain of array) {
        let [num, splitDomain] = domain.split(' ');
        splitDomain = splitDomain.split('.')
        let concatDomain = '';
        for (let i = splitDomain.length - 1; i >= 0; i--) {
          let curr = splitDomain[i]
          if (i !== splitDomain.length - 1 ) {
            concatDomain = curr + '.' + concatDomain;
          } else {
            concatDomain = curr + concatDomain;
          }
          if (!map.has(concatDomain)) {
            map.set(concatDomain, Number(num));
          } else {
            let newVal = map.get(concatDomain) + Number(num);
            map.set(concatDomain, newVal);
          }
        }
      }

    return map;
  }

// Time: O(N) for the number of domains;
// Space: O(N) for the domains saved in the map;

let test1 = ['9001 discuss.leetcode.com'];
let test2 = ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'];

console.log(subdomainVisits(test1)) // ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
console.log(subdomainVisits(test2)) // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
