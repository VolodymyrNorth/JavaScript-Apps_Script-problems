const list = [5, 3, 2, 1, 16, 15, 7]; //creating an array of integers


function logEvens(arr)      //creating a function that would print all even elements of array arr
{                            
    for(let i = 0; i < list.length; i++)  //looping through an array
        if(list[i] % 2 == 0)      //checking whether the number is even
            console.log(list[i] + " ");      //printing the element if it is
}

logEvens(list);     
