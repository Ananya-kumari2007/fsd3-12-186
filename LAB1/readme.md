#EventLoop
js is synchronous and single threaded bydefault
# there can be async behaviour
- with BrowserAPI - 
 setTimeout,setInterval,
 setImmediate , nextTick 
 - with promises
 - with event handlers
 promise = a function not executed immmedietiely buit has it must be executed after a while it has some status during the execution at finam it may resolve success(successful)
 or reject (unsuccesful)

 callback function ==> that pass as argummentts or the parameter to another function
 modern javascript is divideed in to two categories 
 1=common js(.cjs) ->suports oops-> require 
 --priority (nextTick,promise,setImmediate/setTimeout)
 2=modulesJS(.mjs)->follow modular approach ->import
 --priority (promise ,nextTick,setImmediate/setTimeout)
 