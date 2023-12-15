each classname is unique with a prefix of their file location and a suffix of their tag name ,
example : a tag "<h2>" in the homepage file would be given a classname of "homePage-h2" and it is written in pascal case

# home page

this is the starting point of the website for new users , if you just created an account with the website , after successful creation , you are asked to find your institution name , either with a acronym or with the full name of your institution

## error in home page

when i call the api , it works , until i refresh the page then it stop working

so after series of debug , i found out the script runs before the dom is loaded , so im using the useEffect hook from reactjs

// YourComponent.js

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
background-color: #3e8e41;
}

#myInput {
box-sizing: border-box;
background-image: url('searchicon.png');
background-position: 14px 12px;
background-repeat: no-repeat;
font-size: 16px;
padding: 14px 20px 12px 45px;
border: none;
border-bottom: 1px solid #ddd;
}

#myInput:focus {outline: 3px solid #ddd;}

.dropdown {
position: relative;
display: inline-block;
}

.dropdown-content {
display: block;
position: absolute;
background-color: #f6f6f6;
min-width: 230px;
overflow: auto;
border: 1px solid #ddd;
z-index: 1;
}

.dropdown-content a {
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
}

.dropdown a:hover {background-color: #ddd;}

</style>
</head>
<body style="background-color:white;">

<h2>Search/Filter Dropdown</h2>
<p>Click on the button to open the dropdown menu, and use the input field to search for a specific dropdown link.</p>

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
    <a href="#about">About</a>
    <a href="#base">Base</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
    <a href="#custom">Custom</a>
    <a href="#support">Support</a>
    <a href="#tools">Tools</a>
  </div>
</div>

<script>
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
</script>

</body>
</html>

// components/SearchFilter.js

import { useState } from 'react';

const SearchFilter = () => {
const [filter, setFilter] = useState('');

const handleFilterChange = (event) => {
setFilter(event.target.value.toUpperCase());
};

return (
<div>
<input
        type="text"
        id="myInput"
        placeholder="Search..."
        onChange={handleFilterChange}
      />

      <div id="myDropdown">
        <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          {/* Add more list items as needed */}
        </ul>
      </div>

      {/* Apply the filter */}
      <style jsx>{`
        #myDropdown ul li {
          display: ${filter ? 'none' : 'block'};
        }
        #myDropdown ul li a {
          display: ${filter && filter.toUpperCase() === 'ITEM 1' ? 'block' : 'none'};
        }
        #myDropdown ul li a {
          display: ${filter && filter.toUpperCase() === 'ITEM 2' ? 'block' : 'none'};
        }
        #myDropdown ul li a {
          display: ${filter && filter.toUpperCase() === 'ITEM 3' ? 'block' : 'none'};
        }
        /* Add more styles as needed */
      `}</style>
    </div>

);
};

export default SearchFilter;
