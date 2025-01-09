const employees = [
  {
    id: 1,
    firstname: "John",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design.Add essential page - Each page should serve a specific purpose and contribute to the overall user experience.Set goals - Consider what you want to achieve with your website, such as informing visitors, selling products, or scheduling appointments",
        taskDate: "2024-01-05",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the bug in the login feature.Develop the bug fix Craft a solution to address the bug, such as code changes or system adjustments",
        taskDate: "2024-01-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Write unit test cases for the authentication module.Write a test case for every bug fix and include it in your bug tracking system. Test the bug fix to confirm it works as intended and doesn't introduce new issues.",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
   
  },
  {
    id: 2,
    firstname: "Alice",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Set Up Database",
        taskDescription: "Configure the MongoDB database.Log on to the SQL Server Management Studwith sa credentials.Create a database. In the Object Explorer panel, right-click Databases.Set the collation.Create a SQL Server logon.Create a user.Add the schema. .",
        taskDate: "2024-01-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Optimize Queries",
        taskDescription: "Improve the performance of database queries.Use indexes: Indexes help the database find data quickly, like a reference guide. For example, to improve a query that selects rows from a table based on a column value, you can create an index on that column",
        taskDate: "2024-01-12",
        category: "Optimization",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Create API Documentation",
        taskDescription: "Document the REST API endpoints.Tell a Big Story.Provide a Clear Starting Point.Create a Structure that Facilitates Common Use Cases.Write for Humans First.Make it Comprehensive.Make it Interactive.Standardize Your API Design with the OpenAPI Specification",
        taskDate: "2024-01-20",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],

  },
  {
    id: 3,
    firstname: "Robert",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design Footer",
        taskDescription: "Design a footer for the web application.",
        taskDate: "2024-01-07",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Routing Issue",
        taskDescription: "Resolve routing bugs in the frontend.",
        taskDate: "2024-01-11",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Run Security Tests",
        taskDescription: "Conduct penetration tests for security validation.",
        taskDate: "2024-01-25",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  
  },
  {
    id: 4,
    firstname: "Sophia",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Set Up CI/CD Pipeline",
        taskDescription: "Implement continuous integration and delivery.",
        taskDate: "2024-01-09",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Develop Dashboard",
        taskDescription: "Build an admin dashboard for monitoring.",
        taskDate: "2024-01-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize website images.",
        taskDate: "2024-01-22",
        category: "Optimization",
        active: true,
        newTask: false,
        completed: false,
        failed:false,
      },
    ],
 
  },
  {
    id: 5,
    firstname: "Emily",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Research New Tools",
        taskDescription: "Explore tools for frontend development.",
        taskDate: "2024-01-06",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Responsive Issues",
        taskDescription: "Resolve layout issues for mobile screens.",
        taskDate: "2024-01-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Create Style Guide",
        taskDescription: "Prepare a style guide for the project.",
        taskDate: "2024-01-18",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],

  },
];

  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  ];
  
// We have to send the data and get the data, so we have these functions for that:
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees)) 
    localStorage.setItem('admin',JSON.stringify(admin))} // Using this we can set data in our local storage
  

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin')) 
    // To get data from localStorage
    console.log(employees, admin)
    return {employees, admin};
  }



