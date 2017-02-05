# MSA key value interview test
### Explanation of Code: 
This is the test API for MSA interview, this follows all the instructions in the email I recieved as I understood them with the exception of one, the non persistent data. I implemented the persistent data because I found a free service (as long as it is not accessed a lot) to do so and it was incredibly easy to accomplish. The program follows the specified language requirement of being done in Javascript by utilizing a Node.js Server as that is what I am familiar with. Express was chosen as a middleware technology because again, that is what I am familiar with but also because it provides a very easy and convient way to setup routing for API calls. If needed the server that runs this API could also run other services and the way that the routing is setup would make any code additions be very easy and organized. I added two pieces of additional functionality because it was good practice for myself.

### 2 Things you will need
  * Something to send GET, POST, PUT, and DELETE requests with (I used Postman (www.getpostman.com) as I think it is a nice tool and I am familiar with it) 
  * A node.js server to run the code on (I personally installed nodejs on my windows computer and then used git bash to init and run the server)

## How to use:
1. First, clone everything into a directory on a computer 
```git clone https://github.com/Brinsby/keval.git```
2. Run ```npm install``` so that it installs all the needed packages
3. Run ```node server.js``` which will actually run the server. If everything is running correctly, you will see a message saying !["Magic happens on port 3031"](http://i.imgur.com/2cyYEnQ.png)
4. Now you should be able to send requests to the server here are some example ones 

``` GET @ http://localhost:3031/api/keval ```

``` DELETE @ http://localhost:3031/api/keval/[_id goes here] ```
   
## Possible API Requests
Currently you can do the following with the API

| Route                | VERB     | Description                                                | Required |
| -------------------- | -------- | ---------------------------------------------------------- | -------- |
| /api/keval           | *GET*    | Gets all key value expressions                             | Yes      |
| /api/keval           | *POST*   | Creates a new Key Value Pair                               | Yes      |
| /api/keval/:keval_id | *GET*    | Gets specified key value                                   | Yes      |
| /api/keval/:keval_id | *PUT*    | Updates a Key value pair with a new whatever is specified  | No       |
| /api/keval/:keval_id | *DELETE* | Deletes a specified key value pair                         | No       |


