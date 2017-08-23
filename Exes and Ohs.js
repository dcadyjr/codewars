var xo = function (str) {
    
     var xCount = (str.match(/o/gi) || []).length;
     var oCount = (str.match(/x/gi) || []).length;


     if (xCount === oCount){
     	return true;
	}else{
		return false;
	}
}

xo("xo");

