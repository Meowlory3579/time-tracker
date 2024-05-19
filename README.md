# Time Tracker

## Description

## User Story
As a user,  
I want to be able to add and modify product details, assign a location and technician to the product, and use a start/stop timer to track work duration,  
So that I can efficiently manage the progress of product development and maintenance, ensure accountability, and optimize the productivity of my team.  

## Installation for development
Install Node.js, if needed.
Create a .gitignore file and include "node_modules", ".env", ".vscode", "package-lock.json", and ".DS_Store" in it, so that these files aren't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
Make sure that your repo includes a package.json with the required dependencies. You can create one by running "npm init" when you first set up the project, before installing any dependencies.
This application requires the Express package. To install Express, navigate to your terminal and enter "npm install express".
This application requires the Sequelize package. To install Sequelize, navigate to your terminal and enter "npm install sequelize".
This application requires the MySQL2 package. To install MySQL2, navigate to your terminal and enter "npm install --save mysql2".
This application requires the dotenv package. To install dotenv, navigate to your terminal and enter "npm i dotenv".

## Usage for developers
Right-click on the "server.js" file and select "Open in Integrated Terminal". Type "mysql -u root -p" and press enter. Enter MySQL password and press enter. Type "source db/schema.sql" and press enter. Type "exit" and press enter. Type "npm run seed" and press enter. To initiate application, type "node server.js" and press enter.

## The following video demonstrates the application's appearance and functionality
![Coming Soon]()

## URL for deployed application
Coming Soon

## Credentials for deployed application
For a manger's view:  
- Email: hgranger@gmail.com
- Password: admin12345

For an employee's view:
- Email: hpotter@hotmail.com
- Password: password12345

## Contributors
Michael, Mallory, Josh, Sarah, Amanda


