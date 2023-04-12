   // from input There_is_a_dog, the function outputs TIAD (using _ as theDelimiter)
 function makeInitials(theName,theDelimiter) {
 	  let theNam = theName ?? ""; // (nullish coalescing)
 	  var theDelim = theDelimiter ?? ",";
 	  if (theDelim.length == 0) theDelim = ",";
 	  return theNam.split(theDelim).reduce(
 	  	   function(prevalue,element) {
           return prevalue  + element.slice(0,1).toUpperCase();
 	  	   }
         ,""
 	  	);
 }
