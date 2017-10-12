WORDPRESS SEARCH WEBSITE
This website will be used to do http lookups and discover if another website is built on wordpress or not
Users will have the option to type the websites url and the server will do a lookup and based on that give back the results

Alternatevly we will have an option to log-in using Google's passport auth and all the data will be saved on mongodb using password hash values
Routes that would show the search history and user profile will be protected even tho  basic lookup will be able no matter if the user is logged in
or if the lookup is being made a website quest.


Requirements for the new website:
1. FE - Angular 4 front-end with materialize
2. BE - built on nodejs using co, promises, java generators, mongoose database, controllers and routers
3. All routing willl be done on the frontend and BE will only be used to do the lookups for the website and return the data
4. After a while users will be able to login and see what lookups they made 
5. testing will be done on the BE part

Technologies in use:
1. angular 4 w/materialize
2. sass or scss
3, node js
4. nock 
5. mocha and chai unit testing with expect and should
6. mongo db
7. JS generators with co
8. request promises and promises alone