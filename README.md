# node-webapp-template-2
A beginner friendly NodeJS webapp template (REST API). Structure by components. 

This is recognized as a best practice (hope I did it correctly) but I find it not as simple as dividing by technical role. I have another template structured by technical role [HERE](https://github.com/f0lg0/node-webapp-template-1/blob/master/app/routes/date.js)

## Project Structure

* components
  * api
    * api.controller.js
    * api.route.js
  * date
    * date.controller.js
    * date.route.js
  * index
    * index.controller.js
    * index.route.js
  * user
    * user.controller.js
    * user.route.js
    * user.model.js
  * readme.md
* config
  * readme.md
* public
  * components
    * 404
      * 404.html
    * date
      * date.fetchDate.js
    * general
      * general.styles.css
      * general.switchTheme.js
    * index
      * index.html
  * readme.md
* views
  * components
    * date
      * date.ejs
  * readme.md
* package-lock.json
* package.json
* server.js



### Important note

I couldn't find information about organizing the public folder so I organized it with the same principle, the components one. 

## npm Packages

* cookie-parser
* dotenv
* ejs
* express
* helmet
* jsonwebtoken
* mongoose
* morgan
* nodemon

### Run

```
npm install
```

```
npm run dev
```

#### Other Info

For more informations about the template check the readme.md inside every folder.

Check out my offline project generator [HERE](https://github.com/f0lg0/snpgen/).

Soon I will add this template.