### ReadMe File

###### Hello! 
This project was based around an assignment my team members and I received while enrolled in a technical program known as **Road To Hire**. This assignment was called **Hope Hacks**, and the objective of this assignment was to create a full stack application that handles 1 of the 4 following worldly topics:

**1. Health**
**2. Oppression**
**3. Pollution**
**4. Education**

My team had the pleasure of working with the **Education** category for this project.

![Litlo, books that find you!](/images/logo-transparent-png.png)

For this project, we decided we wanted to develop a book finder application known as **Litlo**. The goal in mind while developing the application was, how do we make it easier to find books we’ve heard of, when we don’t know the definite information? With Litlo, you’re able to search for a book by title, author, or even just a bit of the summary, and it will return exactly what you’re looking for! With the utilization of a 3rd party API, we’re able to find and display the desired book information with the help of our search bar, and a simple click of the enter button. We wanted to create a system that takes away the stress not knowing a full title or full author name, but instead brings the books to you through what details you may have.

———————————————————————————————————

**1. How does the code do what it does?**
Our project, **Litlo**, may sound rather complicated and a bit complex at first, but luckily it’s more simple than you may think! For starters, when it comes it our HTML & CSS you may notice it’s is a bit different than what your normal beginning programmer may be used to. For this project our team utilized the the stylistic properties of **Tailwind CSS**.

Tailwind is a fast, lightweight CSS Framework that can be used directly in your markup. Upon installation of the framework, it can be used directly on your HTML, utilized as **class names** of different **div tags** that state the design properties you wish to change, which are then written to a static CSS file.

https://tailwindcss.com/

Our team member, **Sofia Morales**, recommended we use this form of styling to help keep track of organization on our CSS pages. By utilizing the design styles as class names, it almost mimics the same nature of In-line styling used through our normal means of CSS, but allows us not to have to go back and target each individual element across multiple CSS files since the styling has been written in the class-name. This also helps us remain organized by eliminating the need for multiple CSS, where as everything is written to one static CSS file inside of the application.

———————————————————————————————————

When it comes to the functionality of the website, and overall how it accomplishes what we set out to do, we utilized 3 different JavaScript files. Each JavaScript file being given it’s own name as follows:

**1. api.js**
**2. apisearch.js**
**3. app.js**

**api.js & apisearch.js** - These files are the JavaScript we used that explicitly revolve around pulling data from our 3rd party API, and being able to display it to our front end HTML. 

**app.js** - This JavaScript file is used to establish a connection to our database (DB) that we used, being **MySQL**, as well as what all happen if connection is successful and/or unsuccessful. We also have implemented a body parser to return all stored data inside of our created API to return as JSON within our application.

--------------------------------------

**2. How do you run it locally?**
To round things off, our application was created & runs using the node frameworks of **Express & Axios**. Express being used to create our HTTP server, so we have something to respond when it’s sent requests, where as Axios is used as a HTTP client, which creates requests to send to our server.

Once we have a properly running server, we have to connect our DB to it in order to log the books of which people are searching, as well as our customer messages/concerns. We establish a connection to our DB of MySQL by declaring our host, port, as well as the username & password for the DB to properly connect to our server.

After establishing our connection and making sure it’s successful, we utilize a 1st party API, as well as a body parser, in order to hold all requested data sent through our application to our client, inside our API as JSON data.