

//userId

Parse.Cloud.define("exampleFunction", function(request, response) {
  response.success("good");
});

// // Params
// //
// //
// //
// Parse.Cloud.define('blank', function(request, response) {

//   //Security Checks *************************************************
    // if(weBlockedUserForNotBeingSignedIn(request, response))     return;
    // if(weBlockedUserForNotBeingApproved(request, response))     return;
    // // if(weBlockedUserForNotBeingAQueenBee(request, response))    return;
    // if(weBlockedUserForBeingASitter(request, response))         return;
//   //Params **********************************************************
//   let sitterJobId = request.params.sitterJobId;
//   //Derived Variables ***********************************************
//   //Missing Variables Checks ****************************************
//   if(!sitterJobId) return response.error("Missing Paramter."); //TODO: swap to kMissingParameterError
//   //Execute *********************************************************

//   return Parse.Promise.as().then(()=>{
//     var query = new Parse.Query("Payment");
//     query.equalTo("type","hourly");
//     return query.find({useMasterKey:true});
//   })
//   .then(()=>{

//   })
//   .then(()=>{

//   })
//   .then(()=>{
//     response.success("success");
//   },(error)=>{
//     response.error(error);
//   });

// });
