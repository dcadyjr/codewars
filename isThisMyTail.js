function correctTail(body, tail){
  
  var bodyLast = body.substr(body.length - 1);
  
  if (bodyLast === tail){
    return true
  }
  else if(bodyLast != tail){
    return false
    }
};

correctTail("Fox", "x");


Test.describe("Example tests",_=>{
Test.assertEquals(correctTail("Fox", "x"), true);
Test.assertEquals(correctTail("Rhino", "o"), true);
Test.assertEquals(correctTail("Meerkat", "t"), true);
Test.assertEquals(correctTail("Cat", "p"), false);
})
