function minNumberOfCoinsForChange(n, denoms) {
   let currTarget = n;
   let coins = 0;

   for (let i = denoms.length - 1; i >= 0; i--) {
       let denom = denoms[i];

       if (denom <= currTarget) {
           coins += Math.floor(currTarget / denom);
           currTarget = currTarget % denom;
       }
   }

   if (currTarget === 0) {
       return coins;
   }

   return -1;

  }


  console.log(minNumberOfCoinsForChange(, [1, 5, 10]))
