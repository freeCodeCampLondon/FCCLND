The `fccLndData.json` file contains data for the site. It is acting as a database containing all the text that is displayed and the paths to the profile images.

You will need to modify it in order to list yourself as a camper.

The Campers page is a list of all campers taking part at the FCC London meet ups. It shows their details and highlights which point of the FCC track they are.

Using classes we are able to filter which part of the FCC track campers are working on and which parts of the track they have finished.

By doing this people will be able to contact other campers that are at the same point as them to help with pair-programming. It will also allow campers to seek help from people that have already finished the part of the track they are on.


Here some tips on how to fill-out your details in `fccLndData.json`:

[How to add your data to JSON](#how-to-add-your-data-to-JSON)

[Structure of camper object](#structure-of-camper-object)

[Classes you can use](#classes-you-can-use)

##### How to add your data to JSON

An example of how to fill in your Camper info JSON. You should copy this and fill in with your details:

```json

          {
            "name":"Camper",
            "class":"frontend react html-css bootstrap FE-projects",
            "bio":"Hi I am Camper and I love web development!",
            "pic":"http://external-image-host.com/your-image",
            "email":"something@gmail.com",
            "fcc":"http://freecodecamp.com/camper",
            "tw":"http://twitter.com/camper",
            "lk":"https://uk.linkedin.com/in/camper",
            "web":"http://my-portfolio.com",
            "fb":"http://facebook.com/camper",
            "challenge":"Pig Latin",
            "date":"24/4/16"
         },
```

Unless you are the first camper, make sure the block before you ends with:

```
'},'
```

and again if you have other campers after your JSON block, your one should end with:

```
'},'
```

If you are the last camper in the JSON don't worry about the comma, but you should make sure  you have other parenthesis after your block:

```
'         } //CLOSING YOU JSON BLOCK
      ]
   }
}
'
```
After you finished your block JSON you can verify you have filled it correctly using tools such as [JSON validator](http://jsonlint.com/)

### Filling in

Using `ng-Sanitize`, JSON fields are rendering as HTML. You can put links and some style on it. This is mainly for use in your Bio info.

Just remember if you are inserting a link to add:
 ```
    target="_blank"
 ```
 To make sure that the user is staying on the site and the link is opened in a new tab.

 Make sure your bio is fewer than 250 characters to avoid breaking the layout.

####*Structure of camper object:*####

**name** - your name -> REQUIRED

**class** - list of all classes corresponding to the FCC sessions you have completed, these are used for the filter on the camper page so the user can select all campers at a particular point -> REQUIRED for references see at [Classes you can use](#classes-you-can-use)

**bio**- your presentation -> REQUIRED - max 250 characters !!!!!

**pic** - path to your image  -> REQUIRED // due to space limits your image needs to be hosted on a 3rd party e.g. twitter, github, imgur - to fit layout image need to be a square and around 500px

**email** - youremail@something.com"   -> OPTIONAL

**fcc**  -  path to your Free Code Camp profile - -> REQUIRED

**tw** - path to your Twitter page -> OPTIONAL

**lk**: - path to your LinkIn page -> OPTIONAL

**web**  - path to your website / portfolio -> OPTIONAL

**fb** - path to your Facebook profile -> OPTIONAL

**challenge** - Last challenge completed or currently working on -> REQUIRED

**date** - date on which your updating status on FCC LND -> REQUIRED

####*Classes you can use:*####

The first level of filtering highlights which of the main FCC session campers are on or have been working on. Every camper should have at least one of the main classes. Please add the exercise/project you are working on, along with any previous ones that you are available to help other people with.

#####*FILTERING FIRST LEVEL:*#####

1. FRONTEND -  `class = "frontend"`  - if you completed all frontend track then use `class = "frontend-all"` instead.

2. DATA VISUALIZATION - `class = "data-visual"` - if you completed all data visualizzation track then use `class = "dv-all"` instead.

3. BACKEND - `class =" backend"` - if you completed all backend track then use `class = "backend-all"` instead.

The second level of filtering is to show exactly which points of the FCC track you are on and have done. You can have more than one and even all the ones you have completed. Please only use classes that you are willing to help people who are at that track point with.

#####*FILTERING SECOND LEVEL :*#####

*FRONTEND*

1. HTML5 and CSS - `class ="html-css"`

2. Responsive Design with Bootstrap  - `class ="bootstrap"`

3. Basic Front End Development Projects - `class="FE-projects"`

4. Object Oriented and Functional Programming- `class = "opp-f"`

5. Basic Algorithm Scripting - `class = 'basic-alghorithm'`

6. JSON APIs and Ajax - `class ='ajax'`

7. Intermediate Front End Development Projects - `class ="inter-FE"`

8. Intermediate Algorithm Scripting - `class = 'inter-alghorithm'`

9. Advanced Algorithm Scripting - `class='adv-algorithm'`

10. Advanced Front End Development Projects - `class='adv-FE-project'`

*VISUAL DATA*

1. SASS - `class ="sass"`

2. REACTJS - `class = "react"`

3. REACT PROJECTS - `class = 'react-projects'`

4. D3 - `class ='d3'`

5. Data Visuallization Projects - `class= 'data-visual-project'`


*BACKEND*

1. Automated Testing and Debugging - `class='test-debug'`

2. Git - `class 'git'`

3. Node.js and Express.js - `class ="nodeExpress"`

4. Mongo DB - `class='MongoDB'`

5. API Projects - `class= 'web-project'`

6. Dynamic Web Application Projects - `class='dynamic-web-app'`

7. Nonprofit Projects - `class = 'NP-projects'`
