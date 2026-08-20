# file system (FS module)
directly communicate with OS rather than browser  
the common operation on a file or a folder are 
1. file-> write File , read File, append File
2. folder-> Mkdir,rmdir,readdir
3. File Metadata->stat,lstat,rstat
4. watch ->watch,unwatch
5. stream -> readstram(), writestraem()
all functions are promise so it must be called with await keywords 
