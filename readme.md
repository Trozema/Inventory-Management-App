Inventory Management App Document
App Details:
The App was built from the ground up using React, Express and Mongo DB. 
The purpose of the App is to allow businesses to keep an online inventory record for the company. 
This will allow the business store and maintain inventory data online.

To Install The App:
* Move the files to your local machine.
* Open 2 command Prompts and CD (move to) The Backend and the frontend folders.
* Do an NPM install in both followed by an NPM start in Both
* The App will Open to the login screen. 

The App features authentication to access the App. The details can be found below. The main view of the app is encrypted using JWT and can only be view once logged in.
These are placeholder details and can be changed within the Express App.js file under Authentication. A new code would be generated if the details are changed. The React Login Page would need to be updated accordingly.

User: John
Password: 5678
Admin: Thomas
Password: 1234

Once you have Access to the app you can configure the data in multiple ways as seen in the Navigation bar. 

This includes:
1.) adding - The user can add new inventory items
2.) editing - The user can edit exiting inventory items
3.) replacing - The user can replace items by their name
4.) deleting - The user can delete items by their name
5.) filtering - The user can view low stock items

The Database can be changed in the Express App.js file. Just replace the URI with your own MongoDB database script. An empty database to start would be ideal.
For Security:
As mentioned earlier the main Page of the app which displays the inventory items his encrypted using JWT.

Deployed App:

The link for the deployed App can be found below. Issues around getting the app deployed correctly is still being worked on.

https://inventorymanagementapp1.herokuapp.com/ 