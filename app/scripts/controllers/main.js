'use strict';

/**
 * @ngdoc function
 * @name chatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chatApp
 */
  chat.controller('Ctrl1', function ($scope,chatFactory) {
    var c1=this;
    c1.array1= chatFactory.messages;
   $scope.user1 = function(){
    chatFactory.addMessage(c1.u1, c1.n1);
     c1.u1='';
   };
   $scope.name1=function(){
    document.getElementById("button1").style.display='none';
    document.getElementById("replace1").innerHTML='<h3><b>'+'Welcome '+ c1.n1+'</b></h3>';
    document.getElementById("inp1").style.display = 'block';
   }
  });
  chat.controller('Ctrl2', function ($scope,chatFactory) {
    var c2=this;
    c2.array2= chatFactory.messages;
  	$scope.user2=function(){
    chatFactory.addMessage(c2.u2, c2.n2);
    c2.u2='';
   	};
    $scope.name2=function(){
    document.getElementById("button2").style.display='none';
    document.getElementById("replace2").innerHTML='<h3><b>'+'Welcome '+ c2.n2+'</b></h3>';
    document.getElementById("inp2").style.display = 'block';
  }
  });
  chat.factory('chatFactory',function(){
  	var msg={
      messages:[],
  	addMessage:function(text,caller){
  		var message = {
        text : caller +'  Wrote'+ ' : '+ text
      }
    this.messages.push(message);
    }
  }
    return msg;
  });
