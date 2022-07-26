//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU4ODI5Mzc3LCJleHAiOjE2NTg4MzI5NzcsIm5iZiI6MTY1ODgyOTM3NywianRpIjoick1wRmdpS2VWcDVwYTh4bCIsInN1YiI6OCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.YYYGe1LlmUaAjiHKCrn82TnjkBPRWC6MzgTU51ouyGE"; // put access token
const student = {
  student_id:633632907,
  name: 'teeraphat muaksang', // replace with your full name.
  age: 21, // put your age.
  gender: 'bisexual', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU4ODI5Mzc3LCJleHAiOjE2NTg4MzI5NzcsIm5iZiI6MTY1ODgyOTM3NywianRpIjoick1wRmdpS2VWcDVwYTh4bCIsInN1YiI6OCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.YYYGe1LlmUaAjiHKCrn82TnjkBPRWC6MzgTU51ouyGE`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}