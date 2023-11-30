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


   function isNotCommon(s) {
   	 var commons = ['the','to','and','for','on','in','of','from','is','isnt','up','down','be','a','an','at','if','but','not','or','either','both','some','one','two','three','all','was','were','when','out','this','that','has','have','having','being','will','going','goes','went','go','start','starting','end','ending','are','until','before','after','must','can','cant','make','sure','also','too','need','needs','than','then','see','wait','hear','anything','something','any','unsure','other','few','its','with','you','me','us','they','them','our','your','their','there','new','old','wont','her','his','ours','would','like','thank','please','upon','into','had','over','very','somewhat','next','hour','day','hours','days','monthly','month','annual','yearly','same','again','thing','likely','probably','let','away','been','done','completely','partially','thanks','now','around','feel','today','between','outside','inside','came','through','yesterday','come','along','above','below','within','apart','where','should','needed','dont','think','got','ago','get','rid','know','only','area','per','high','middle','elementary','school','problem','little','may','behind','more','needed','issue','issues','off','people','person','quarterly','item','room','rooms','those','classroom','mrs','mgmt','mr','attic','entire','did','situation','coming','getting','repair','repaired','replace','restore','art','music','stuck','expired','these','provide','provided','just','said','another','says','say','pretty'
   	 ];
   	 var retVal = true;
   	 for (i=1;(i<=arrayLen(commons)) && (retVal == true);i++)
   	 {  if (commons[i] == lCase(s)) retVal = false;

   	 }
   	 return retVal;
   }

</cfscript>
