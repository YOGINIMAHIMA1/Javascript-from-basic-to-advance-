function lettersFinder(words, letterToMatch)
{
  for(var i=0;i<words.length;i++)
    {
      if(words[i]== letterToMatch)
      {
        console.log(' found the letter' + letterToMatch+ 'at index' + i);
      }
      else
      {
        console.log(' No match found at index ' +i);
      }
    }
}
lettersFinder([4,5], 'o');
/*
VM1666:11  No match found at index 0
VM1666:11  No match found at index 1   */
