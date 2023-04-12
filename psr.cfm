<cfscript>
   // Author: Nathan
   // from input There_is_a_dog, the function outputs TIAD (using _ as theDelimiter)
 function makeInitials(theName,theDelimiter) {
 	  theDelim = theDelimiter ?: ",";
 	  if (len(theDelim) eq 0) theDelim = ",";
 	  return arrayReduce(listToArray(theName,theDelim)
 	  	   ,function(prevalue,element) {
           return prevalue & uCase(left(element,1));
 	  	   }
         ,""
 	  	);
 }
</cfscript>
