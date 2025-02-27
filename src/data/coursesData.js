const coursesData = [
  {
    id: "html",
    title: "HTML Fundamentals",
    description: "Learn the building blocks of web development with HTML5. This course covers everything from basic tags to semantic HTML and accessibility.",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    category: "Web Development",
    lessons: 12,
    level: "Beginner",
    duration: "4 weeks",
    content: [
      {
        title: "Introduction to HTML",
        description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages.",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
</body>
</html>`
      },
      {
        title: "HTML Elements and Tags",
        description: "HTML uses elements to define the structure of a page. Elements are represented by tags, which are enclosed in angle brackets.",
        code: `<!-- Heading Tags -->
<h1>This is a heading level 1</h1>
<h2>This is a heading level 2</h2>
<h3>This is a heading level 3</h3>

<!-- Paragraph Tag -->
<p>This is a paragraph of text.</p>

<!-- Link Tag -->
<a href="https://www.example.com">This is a link</a>

<!-- Image Tag -->
<img src="image.jpg" alt="Description of image">`
      },
      {
        title: "HTML Forms",
        description: "HTML forms are used to collect user input. They contain various input elements like text fields, checkboxes, radio buttons, and more.",
        code: `<form action="/submit-form" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4"></textarea>
  
  <button type="submit">Submit</button>
</form>`
      }
    ]
  },
  {
    id: "css",
    title: "CSS Styling Mastery",
    description: "Master the art of styling web pages with CSS. Learn about selectors, layouts, animations, and responsive design techniques.",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    category: "Web Development",
    lessons: 15,
    level: "Intermediate",
    duration: "6 weeks",
    content: [
      {
        title: "Introduction to CSS",
        description: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and more.",
        code: `/* External CSS file (styles.css) */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #666;
}`
      },
      {
        title: "CSS Selectors",
        description: "CSS selectors are patterns used to select and style HTML elements. They range from simple element selectors to complex combinations.",
        code: `/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#header {
  font-size: 24px;
}

/* Descendant Selector */
article p {
  font-style: italic;
}

/* Pseudo-class Selector */
a:hover {
  text-decoration: underline;
}`
      },
      {
        title: "CSS Flexbox Layout",
        description: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides a more efficient way to distribute space and align items.",
        code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 200px;
  margin: 10px;
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 5px;
}`
      }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript Programming",
    description: "Dive into JavaScript programming and learn how to create interactive web applications. From basics to advanced concepts like async/await and ES6 features.",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Programming",
    lessons: 20,
    level: "Intermediate",
    duration: "8 weeks",
    content: [
      {
        title: "Introduction to JavaScript",
        description: "JavaScript is a programming language that enables interactive web pages. It's an essential part of web applications and can be used on both the client and server side.",
        code: `// Basic JavaScript syntax
let greeting = "Hello, World!";
console.log(greeting);

// Variables and data types
let name = "John";           // String
let age = 30;                // Number
let isStudent = true;        // Boolean
let hobbies = ["reading", "coding", "hiking"];  // Array
let person = {               // Object
  firstName: "John",
  lastName: "Doe"
};`
      },
      {
        title: "Functions in JavaScript",
        description: "Functions are blocks of code designed to perform a particular task. They are executed when they are called or invoked.",
        code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
function createUser(name, age = 25) {
  return {
    name: name,
    age: age
  };
}

// Using functions
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));       // 8
console.log(multiply(4, 2));  // 8`
      },
      {
        title: "DOM Manipulation",
        description: "The Document Object Model (DOM) is a programming interface for web documents. JavaScript can change all the HTML elements, attributes, and CSS styles in the page.",
        code: `// Selecting elements
const heading = document.getElementById("main-heading");
const paragraphs = document.getElementsByTagName("p");
const buttons = document.querySelectorAll(".btn");

// Changing content
heading.textContent = "New Heading";
heading.innerHTML = "<span>New</span> Heading";

// Changing styles
heading.style.color = "blue";
heading.style.fontSize = "24px";

// Adding event listeners
const button = document.querySelector("#submit-btn");
button.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Button clicked!");
});`
      }
    ]
  },
  {
    id: "java",
    title: "Java Programming Fundamentals",
    description: "Learn the fundamentals of Java programming language. This course covers object-oriented programming, data structures, and building applications with Java.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Programming",
    lessons: 18,
    level: "Intermediate",
    duration: "10 weeks",
    content: [
      {
        title: "Introduction to Java",
        description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        code: `// Hello World program in Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
      },
      {
        title: "Java Variables and Data Types",
        description: "Java has various data types to store different kinds of values. Variables are containers for storing data values.",
        code: `// Primitive data types
int age = 25;                  // Integer
double salary = 50000.50;      // Floating point
char grade = 'A';              // Character
boolean isEmployed = true;     // Boolean

// Reference data types
String name = "John Doe";      // String
int[] numbers = {1, 2, 3, 4, 5}; // Array

// Constants
final double PI = 3.14159;`
      },
      {
        title: "Object-Oriented Programming in Java",
        description: "Java is an object-oriented programming language. Everything in Java is associated with classes and objects, along with its attributes and methods.",
        code: `// Class definition
public class Person {
    // Instance variables
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

// Using the class
public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice", 30);
        person.introduce();
        
        person.setAge(31);
        System.out.println(person.getName() + " is now " + person.getAge() + " years old.");
    }
}`
      }
    ]
  }
];

export default coursesData;