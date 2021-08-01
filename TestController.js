const { compose } = require("objection");
const test = require("../models/test");
const {Validator}=require('node-input-validator');



class TestController {
    index = async (req, res) => {

        try {
          




            let data = await test.query().select('*').orderBy('id','desc');
            
            if(data != undefined){

                res.send({ status: 200, message: 'data retrived successfully', data:data });
            }else{
                res.send({ status: 200, message: 'no data found', data:[]});
            }



        } catch (err) {
            console.log(err);
            res.send({ status: 500, message: 'oops something wents wrong', data: [] });

        }

    }

    create = async (req, res) => {
        try {

            let v= new Validator(req.body,{
                'firstName':'required',
                'lastName':'required',
                'gender':'required',
                'email':'required',
                'number':'required',
                'password':'required'

            });
            console.log(v);

            let matched =  await v.check();

            if(!matched){
                for(var keys in v.errors){
                  return res.send({status:500,message:v.errors[keys].message});
                }
            }

            let requestData=req.body;
            let dataStore=await test.query().insert(requestData);
            if(dataStore != undefined){
                res.send({ status: 200, message: 'data inserted successfully', data:[] });
            }else{
                res.send({ status: 200, message: 'not inserted', data:[]});
            }

            //console.log(req.body);
        } catch (err) {
            console.log(err);
            res.send({ status: 500, message: 'oops something wents wrong', data: [] });

        }
    }
    show= async (req, res) => {
        try {


            let userId=req.params.user_id;

            // if(userId == null && typeof(userId)==number){
            //     res.send({ status:422, message: 'bad request', data: []})

            // }
            let userData=await test.query().where('id',userId).first();
           
            if(userData != undefined){
                res.send({ status: 200, message: 'data retrived successfully', data:userData });
            }else{
                res.send({ status: 200, message: 'no data found', data:[]});
            }

            //console.log(req.body);
        } catch (err) {
            console.log(err);
            res.send({ status: 500, message: 'oops something wents wrong', data: [] });

        }
    }
    update= async (req, res) => {
        try {

            let userId=req.params.user_id;
            let v= new Validator(req.body,{
                'firstName':'required',
                'lastName':'required',
                'gender':'required',
                'email':'required',
                'number':'required',
                'password':'required'

            });
            console.log(v);

            let matched =  await v.check();

            if(!matched){
                for(var keys in v.errors){
                  return res.send({status:500,message:v.errors[keys].message});
                }
            }
            let requestData=req.body;
            let dataStore=await test.query().where('id',userId).update(requestData);
           
            if(dataStore == 1){
                res.send({ status: 200, message: 'data updated successfully', data:[] });
            }else{
                res.send({ status: 200, message: 'not updated', data:[]});
            }

            //console.log(req.body);
        } catch (err) {
            console.log(err);
            res.send({ status: 500, message: 'oops something wents wrong', data: [] });

        }
    }
    delete= async (req, res) => {
        try {

            let userId=req.params.user_id;
           
            let dataDelete=await test.query().where('id',userId).delete();
           
            if(dataDelete == 1){
                res.send({ status: 200, message: 'data deleted successfully', data:[] });
            }else{
                res.send({ status: 200, message: 'not deleted', data:[]});
            }

            //console.log(req.body);
        } catch (err) {
            console.log(err);
            res.send({ status: 500, message: 'oops something wents wrong', data: [] });

        }
    }

    uploadMultipartData=async (req, res) => {
        try {

           

            console.log(req.files);
        } catch (err) {
            console.log(err);
            res.send({ status: 500, message: 'oops something wents wrong', data: [] });


        }
    }

}

module.exports = new TestController();