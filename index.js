const chai = require( 'chai' );
const promised = require( 'chai-as-promised' );

chai.use( promised );
chai.should();


const somePromise = new Promise( () => {
  throw new Error( 'rejected' );
} );

describe( 'promise', () => {
  it( 'should be rejected', () => {
    return somePromise.should.be.rejected;
  } );
} );
