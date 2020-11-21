let expect = require('chai').expect;
let request = require('request');

 describe('Status and content', function() {
   describe ('Users page', function() {
    
    it('status', function(done){

 request('mongodb+srv://Thomas:Trian1123@cluster0.jqibo.mongodb.net/InventoryDB?retryWrites=true&w=majority',
 
 function(error, response, body) {
 expect(response.statusCode).to.equal(200);
 done();
 });
 });
 
 
 });
 });
