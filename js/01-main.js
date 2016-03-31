QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("second test", function(assert){
  assert.ok( 1 == "2", "Cannot pass!" );
});