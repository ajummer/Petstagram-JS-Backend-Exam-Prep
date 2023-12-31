# cheat-sheet

1. Init project
2. Install nodemon in dev environment
3.Install and setup express JS

- Add static middleware 
- Add body parser
- Add routes

4. Add static resources (css/images) 
5. Add view folder with ready htmls
6. Add view engine (express-handlebars)
    * Install handlebars
    * Add to express
    * Config views folder (only for src)
    * Add main layout
    * Add partials folder
    * Fix header nav to home
    * Render home page
7. Add controllers folder with home controller
8. Add Database
    * Install mongoose
    * Connect db
9.Authentication views
    * Add user controller
    * Add the controller to routes
    * Fix header nav to login,register and logout
    * Render login page
    * Render register page
10. Add user model
    * Add unique for username 
    * Validate repass with virtual property
11. Modify login and register forms in html
12. Add register and login post actions in userController
13. Add user service/manager
    * Require userService in userController
    * Add register method in userService with validation for unique username
14. Hash password
    * Install bcrypt
    * Hash password in model layer pre save
15. Login 
    * Find user and throw error if not found
    * Compare passwords with bcrypt compare and throw error if they don't match
16. Generate JWT token
    * Install jwt
    * Promisify jsonwebtoken (it's optional ,but it's a good practice to make it asynchronous)
    * Generate the token 
        * Create payload
        * Generate secret
17. Return the generated token in cookie
    * Install cookie-parser
    * Config cookie-parser in index.js
    * Set the token as cookie and redirect to home page
18.Logout
    * Clear cookie and redirect to home page
19. Create authentication middleware
    * configure auth middleware in index.js
    * implement auth middleware 
        * attach decoded token to req
        * handle invalid token
20. Authorization middleware
21. Dynamic navigation
    * Add conditional in main layout
    * Add res.locals to auth middleware
22. Error handling
    * Add 404 page
    * Redirect missing routes to 404
    * Add error message extractor
23.Show error notifications
    * Add error container to main layout
    * Show error container conditionally
    * Pass error to render
    * Add local error handlers


24.Add photo Model
25.Add create photo page 
    * Create photos folder in views
    * Add create/details and edit html to the folder  and change their extenstions to hbs
    * Trim the html,change the form method to POST and fill the empty name with the relevant name [// name="age"] 
    * Fix the href to create photo page in main layout
26.Create Photo controller
    * Add the controller to the routes.js
27.Create Photo service
28.Add Catalog page with dynamic data
    * Make the post partial view
    * Change catalog hbs to index hbs and put it inside the photos folder so router.get("/") will ref to it by default
    * Add get all posts service to return all posts from database and populate it with owner object
29. Add details page
    * Render the page in photoController
    * Get the post Id
    * Create getOnePost service in services
    * Add edit/delete buttons conditionally
30. Add edit page
31.Add comments
32. Add Profile page
33.Add extra validations to register in User model
    

// TODO Validations and route guards