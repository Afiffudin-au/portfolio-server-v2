# portfolio-server-v2

A portfolio server is a simple and flexible way to collect, store, and display your work. Designed to make your data accessible and  simply a place to document your work.

this is the v2 service API used by https://github.com/Afiffudin-au/new-portfolio.

 - API v1 = https://github.com/Afiffudin-au/portfolio-server-v1
 - API v2 = https://github.com/Afiffudin-au/portfolio-server-v2
 
For the first time, create a user and password for basic authentication, start a local server and connect to an online database. Then :

    //Turn off basicAuth Middleware :
    app.use(URL, userRouter)
 If you have already created a user and password, add the basic auth middleware again. Now the API is safe from unknown calls and can be used on public or local servers.

    //Turn on basicAtuh Middleware
    app.use(URL,  mwBasicAuth,  userRouter)


 - **API DOCS LOCAL :** https://documenter.getpostman.com/view/11752153/Uz5FKx3J
 
 - **API DOCS PUBLIC :** https://documenter.getpostman.com/view/11752153/Uz5KnF91
