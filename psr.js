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

/* edit this list for your application */
const common_words1 = ['the','to','and','for','on','in','of','from','is','isnt','up','down','be','a','an','at','if','but','not','or','either','both','some','one','two','three','all'
                       ,'was','were','when','out','this','that','has','have','having','being','will','going','goes','went','go','start','starting','end','ending','are','until'
                       ,'before','after','must','can','cant','make','sure','also','too','need','needs','than','then','see','wait','hear','anything','something','any','unsure'
                       ,'other','few','its','with','you','me','us','they','them','our','your','their','there','new','old','wont','her','his','ours','would','like','thank','please'
                       ,'upon','into','had','over','very','somewhat','next','hour','day','hours','days','week','monthly','month','annual','yearly','same','again','thing','likely'
                       ,'probably','let','away','been','done','completely','partially','thanks','now','around','feel','today','between','outside','inside','came','through','yesterday'
                       ,'come','along','above','below','within','apart','where','should','needed','dont','think','got','ago','get','rid','know','only','area','per','high','middle','elementary'
                       ,'school','problem','little','may','behind','more','needed','issue','issues','off','people','person','quarterly','item','room','rooms','those','classroom','mrs','mgmt'
                       ,'mr','attic','entire','did','situation','coming','getting','repair','repaired','replace','restore','art','music','stuck','expired','these','provide','provided'
                       ,'just','said','another','says','say','pretty','gym','gymasium','cafeteria','quote','fix','tech','service','top','under','underneath'
     ];

function isCommonWord(stg) {
   	 var retVal = false;
   	 for (i=0;((i < commons_words1.length) && (retVal == false));i++)
   	 {  if (commons[i] == stg.toLowerCase()) retVal = true;  // please pretest stg to be string
   	 }
   	 return retVal;   
}
