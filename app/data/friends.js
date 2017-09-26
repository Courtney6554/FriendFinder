var friendsArray = [
    {
        "name":"Joe",
        "photo":"/Images/CHC.jpg",
        "scores":[3, 3, 5, 4, 5, 2, 2, 1, 4, 1]
    },
    {
        "name":"Terry",
        "photo":"/Images/CLE.jpg",
        "scores":[3, 3, 5, 4, 5, 2, 2, 1, 4, 1]
    },
    {
        "name":"John",
        "photo":"/Images/BOS.jpg",
        "scores":[3, 3, 5, 4, 5, 2, 2, 1, 4, 1]
    },
    {
        "name":"Dave",
        "photo":"/Images/LAD.jpg",
        "scores":[3, 3, 5, 4, 5, 2, 2, 1, 4, 1]
    },
    {
        "name":"Mike",
        "photo":"/Images/STL.jpg",
        "scores": [3, 3, 5, 4, 5, 2, 2, 1, 4, 1]
    }
];

module.exports = friendsArray;

//=======================================//
// Can not get jquery to run with node.
//=======================================//

// var $ = require("jquery");
// var userdata = {};

// // $(document).ready(function() {

// $('#submitButton').on("click", function() {
//     if(!$('#nameEntry').val() || !$('#imageEntry').val()){
//         console.log("Complete all blanks");

//     } else {
//         userdata = 
//         {
//             name: $("friendName").val(),
//             image: $("friendPhotoLink").val(),
//             score: 
//             [
//                 $('#q1').val(),
//                 $('#q2').val(),
//                 $('#q3').val(),
//                 $('#q4').val(),
//                 $('#q5').val(),
//                 $('#q6').val(),
//                 $('#q7').val(),
//                 $('#q8').val(),
//                 $('#q9').val(),
//                 $('#q10').val()           
//             ]
//         };
//     console.log(userdata);
//     }

//     $.ajax({
//         type: "GET",
//         url: "/api/friends/",
//         data:{ userdata: JSON.stringify(userdata) },
//         dataType: "json"
//     }).done(function(data){
//         console.log(data);
//     } );;
    
        
// });

 

// });

// module.exports(userdata);