# Time Tracker

## Description
The purpose of this group project is to design and build an app using the MVC paradigm, develop a server-side API, implement user authentication, and connect to a database.

## User Story
As a user,  
I want to be able to add and modify product details, assign a location and technician to the product, and use a start/stop timer to track work duration,  
So that I can efficiently manage the progress of product development and maintenance, ensure accountability, and optimize the productivity of my team.  

## Installation for development
Install Node.js, if needed.  

Create a .gitignore file and include "node_modules", ".env", ".vscode", "package-lock.json", and ".DS_Store" in it, so that these files aren't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.  

Make sure that your repo includes a package.json with the required dependencies. You can create one by running "npm init" when you first set up the project, before installing any dependencies.  

To install the required dependencies, navigate to your terminal and enter "npm i".  

## Usage for developers
Right-click on the "server.js" file and select "Open in Integrated Terminal". Type "mysql -u root -p" and press enter. Enter MySQL password and press enter. Type "source db/schema.sql" and press enter. Type "exit" and press enter. Type "npm run seed" and press enter. To initiate application, type "node server.js" and press enter.

## The following video demonstrates the application's appearance and functionality
![Webpage titled "Time Tracker" featuring a Dashboard displaying the progress of items being manufactured.](https://github.com/Meowlory3579/time-tracker/blob/main/public/assets/ProductionTracker.gif)

## URL for deployed application
https://best-time-tracker-666990ef70ad.herokuapp.com/

## Credentials for deployed application
For a manger's view:  
- Email: hgranger@gmail.com
- Password: admin12345

For an employee's view:
- Email: hpotter@hotmail.com
- Password: password12345

## Contributors
Amanda Andrews - https://github.com/amandrews09 | Josh Manley - https://github.com/Josh-Manley | Mallory Howard - https://github.com/Meowlory3579 | Michael Chiem - https://github.com/Michael-Chiem | Sarah Higley - https://github.com/sarahigley19



