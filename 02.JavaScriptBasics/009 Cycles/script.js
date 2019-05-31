'use strict';

let num = 50;
while(num < 55){
    console.log(num);   // 50, 51, 52, 53, 54
    num++;
}

num = 50;
do {
    console.log(num);   // 50, 51, 52, 53, 54
    num++;
}
while (num<55);

for (let i = 1; i < 8; i++)
{
    console.log(i); // 1, 2, 3, 4, 5, 6, 7
}

for (let i = 1; i < 8; i++)
{
    if ( i == 6 )
    {
        break;
    }
    console.log(i); // 1, 2, 3, 4, 5
}

for (let i = 1; i < 8; i++)
{
    if ( i == 6 )
    {
        continue;
    }
    console.log(i); // 1, 2, 3, 4, 5, 7
}