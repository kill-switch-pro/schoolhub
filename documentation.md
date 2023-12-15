each classname is unique with a prefix of their file location and a suffix of their tag name ,
example : a tag "<h2>" in the homepage file would be given a classname of "homePage-h2" and it is written in pascal case

# home page

this is the starting point of the website for new users , if you just created an account with the website , after successful creation , you are asked to find your institution name , either with a acronym or with the full name of your institution

## error in home page

when i call the api , it works , until i refresh the page then it stop working

so after series of debug , i found out the script runs before the dom is loaded , so im using the useEffect hook from reactjs
