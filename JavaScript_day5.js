// Example of raw XHR.
function ajaxCall() {
    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
           if (ajaxRequest.status == 200) {
               var myDiv = document.querySelector('.main');
               var newDiv = document.createElement('div');
               newDiv.innerHTML = ajaxRequest.responseText;
               myDiv.appendChild(newDiv);
           }
           else if (ajaxRequest.status == 400) {
              console.log('There was an error 400');
           }
           else {
              console.log('something else other than 200 was returned');
           }
        }
    };

    ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
    ajaxRequest.send();
}

(function(document){
  var myBtn = document.getElementById('myButton');
  myBtn.addEventListener('click', ajaxCall);
})(document);

// Corresponding HTML

<body>
  <h2>A Simple ToDo Application</h2>
   <div class="main">
     <ul>
       <li><button type="button" id="myButton">Sync</button>
           <button type="button" id="deleteList">Clear List</button>
       </li>
     </ul>

     <ul class="listOne"></ul>
  </div>
  <script src="main.js" charset="utf-8"></script>
  </body>


// Example GET request.
T
$.get('http://jsonplaceholder.typicode.com/todos', function(todos){
  console.log(todos);
});

