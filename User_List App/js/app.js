var myApp = angular.module("myApp",[])
myApp.controller("myController",function($scope)
{
    $scope.NewUserList = {};   //For Adding New Users
    $scope.SelectedUser = {};  //For Selecting users for update and delete
    $scope.userList = [
        {Firstname:"liton",Lastname:"das",Email:"litondas@opener.com"},
        {Firstname:"tamim",Lastname:"iqbal",Email:"tamimiqbal@opener.com"}
    ]; // Default values in the storage
      
        

    
    $scope.Add_New_User = function(){
         $firstname = document.getElementById("firstname").value;
        $lastname = document.getElementById("lastname").value;
         $email = document.getElementById("email").value;
        
        if($firstname==''||$lastname==''||$email=='') //Form validation for empty input
        {
            console.log("cant keep any field empty");
        }
        
        else{
            $scope.userList.push($scope.NewUserList);
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            $scope.NewUserList = {};//Set to previous state for new user input
            
        }
        
    }
    $scope.Find_User = function(users)//Selecting a user and then updating corresponding info about the user

{
   console.log(users);
   $scope.SelectedUser = users;
  
   
}


$scope.Edit_User_Info = function(users)
{
    
};
 
$scope.Delete_User = function(users)// Selecting the user and deleting corresponding info
{
    $scope.SelectedUser = users;
   $scope.userList.splice($scope.userList.indexOf($scope.SelectedUser),1)
} 
    
});
