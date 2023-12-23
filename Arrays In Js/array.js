var costumeItems=[]
costumeItems.push('leather')
costumeItems.push('pants')
costumeItems.push('leggies')
costumeItems.pop()
for(var i=0;i<=costumeItems.length;i++)
{
    console.log(costumeItems[i])// 'leggies
                                 // 'pants'
}
console.log(costumeItems[1])//pants
