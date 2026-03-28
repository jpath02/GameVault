(GameVault high-level prototype readme)

GameVault is an online game store where users can login, look through all the available games and choose to add them to their cart or wishlist and even purchase them. 

All the game data (title, genre, platform, price, and more) is stored in object arrays so that it can be easier to find when I need to access it. It also makes building the functionalities less of a headache because I wouldn't have to rewrite the same code over and over again when trying to create the features like search, filter, add to cart, etc... 

I used rendering functions to make GameVault a dynamic website so that the navigation for the user is easy to understand with all the buttons and inputs correctly providing feedback to them depending on what they do. To be specific, I used a single function, (showsection(id)), which hid all the existing page sections and only showed the one that the user triggered using the “id”. And the filtering options were being updated by “filterState” and then calling “applyFilters()”, which would ensure that the properties are able to be filtered correctly. This strategy helped me debug a lot because when something was wrong in my code, I could just print out filterState and see exactly which property was incorrect. 

The cart and wishlist functionalities were very similar with both of them storing the info of the selected games by the user with the only difference being that the cart is able to calculate the total of the user's selected games. For all of the input fields (checkout info, newsletters), I made sure to add input validation and provide visible error messages to the user to help them understand what they need to do and just improve the usability of GameVault overall.

GameVault was created with the new knowledge I learned in ITEC3230 as well as my other HTML course from last semester (ITEC3020). Anything else that was used was heavily inspired by the sources I mentioned at the beginning (which were all of the successful existing online game stores).
