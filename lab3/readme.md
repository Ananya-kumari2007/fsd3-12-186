# HTTP (hyper text transfer protocol)module 
it is built in node .js module which allows developers to create web server and web client without instaling any external package 
one of the most iportant module is node .js , originally designed for building scalable network application and network servers 

1. create web servers  
2. handle client request 
3. build rest APIs 
4. non blocking I/O
5. Foundation of Express.js 

## http status codes -> res.writeHead () , res.statusCode
-200 -> ok 
-201 -> created 
-400 -> Bad request 
-401 -> unauthorised 
-403 -> forbidden 
-404 -> not found 
-500 -> internal server error 

### server can send to the client 
1. html contents ->  prg2 , prg3 
2. html files -> prg5 
3. json data -> prg4
4. plain file 
5. js file 
6. any file to download 
7. etc

##  type of information 
1. text / html -> for html file / contents 
2. text / json -> for json data 
3. text / css -> for css file / contents 
4. application -> for file 
5. text / plain -> for plain text file 

### Note: .gitignore -> this files contain the list of files or folder that is not added to git , these files / folder will not push on GitHub 