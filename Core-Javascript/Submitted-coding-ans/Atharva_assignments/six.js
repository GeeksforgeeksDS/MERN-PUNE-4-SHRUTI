let arr=[7,3,6,1,6,12,63,84,96,4,2];
let comp=0;
for(let i=0; i<arr.length; i++)
{
    if(comp<arr[i])
    {
        comp=arr[i];
    }
}
console.log(`Greatest number in the array = ${comp}`);