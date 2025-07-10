
# MERN Backend Set Up

To set this up, please read the guide below. Make sure you have the Node.js installed on your system already. 

https://nodejs.org/en


## Installation and Deployment (Locally)

Create a folder first and open it on your code editor.

```bash
  git clone 'https://github.com/ruseki/MERN-Backbone-Backend-Ready'
```

Set the path to the backend folder.
```bash
cd backend
```
    
Install all the packages (automatically). The packages needed for this repository to work is stated in the package.json file so you don't have to manually install them. Installing them manually sometimes causes errors due to version differences.

```bash
npm install
```

**Get a MongoDB URI Key first if you don't have one**

https://www.mongodb.com

Create or sign in > Create a New Project then name it > Select build a cluster and choose a free tier > Select your a cloud provider (select the faster / low carbon / no carbon > Name your cluster then create > Go to the database access tab > Set username/password and assign readWrite permissions > Go to the Network Access tab > Add your ip address or just use 0.0.0.0/0 to access it anywhere > Go again to Clusters > Connect > Choose "Connect your application" > select your driver (Node.js) and version, then copy your connection URI 


Before deploying, make sure you have created an environment variable inside the backend folder.

Create a file > .env
You will need to add the following environment variables to your .env file

`MONGODB_URI` = add your MongoDB key here

`PORT` = any available port on your system, you can use 3000 as default


**Deploy the project**

```bash
npm run dev
```


**Server is running on PORT** {PORT}

**Database has connected successfully!**

# Unlink your local copy to this github repository

Create a new terminal 

Run this
```bash
git remote remove origin
```

Run this to verify
```bash
git remote -v
```