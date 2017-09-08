angular.module('myapp')
.controller('employeeCtrl',
    function($scope, $http) {
        $http.get("views/employee/employeePanel.json").then(function (response) {
            $scope.members = response.data;
        },function (error){
            console.log(error);
      });
    }
);
function validate()
{
   if(document.getElementById('name').value =="" || document.getElementById('employeeId').value=="" || document.getElementById('email').value==""||document.getElementById('mobilenumber').value=="")
     {
       alert("fill all the fields");}
 else
     { alert("form submitted successfully");}
}
