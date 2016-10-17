const chai = require('chai');
const should = chai.should();

const svc = require('../app/services/codeService');



describe("We are testing the codeService", function(){
    var data_obj = {
        fld1 : "fld1",
        fld2 : "fld2",
        fld3 : "fld3",
        fld4 : "fld4",
        fld5 : "fld5"
    };

    var data_obj2 = {
        fld1 : "22-fld1",
        fld2 : "22-fld2",
        fld3 : "22-fld3",
        fld4 : "22-fld4",
        fld5 : "22-fld5"
    };

    
    
    var id = ''; 
    
    it("Should save code into DB", done => {
        svc.save({
            'app' : 'nodejs', 
            'data' : {
                'code' : JSON.stringify(data_obj) 
            }
        }).then(obj => {
            console.log(obj);

            id = obj.id;
            done();
        })
    });


    it('should retrieve code by short id', done => {
        svc.get({id : id} ).then(obj=> {
            console.log(obj);
            done();
        });
    })

    it('should update existing record', done => {
        svc.save({
            'id' : id, 
            'app' : 'nodejs',
            'data' : {
                'code' : JSON.stringify(data_obj2)
            }
        }).then(obj => {
            console.log(obj);

            id = obj.id;
            done();
        })
    })
});