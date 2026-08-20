# file system (FS module)
directly communicate with OS rather than browser  
the common operation on a file or a folder are 
1. file-> write File , read File, append File
2. folder-> Mkdir,rmdir,readdir
3. File Metadata->stat,lstat,rstat
4. watch ->watch,unwatch
5. stream -> readstram(), writestraem()
all functions are promise so it must be called with await keywords 
//c-create R-retrieve  U-update   D-delete 
# File system (Fs module)
#CRUD project 
assume we are making a cart related project 
1. user can add any product (Id,name ,price , qty)in to cart 
2. user can see all the items of cart 
3. user can remove items from cart 
4. user can also update quantity of product 
5. all the items should be stored after temination of project