The fccLndDat.json contains data for our little site. Is acting as our database containing all the text displayed and all the path to the images displayed.

You will need to modify it in order to list your self as campers.


Campers page is supposed to list all campers taking part at the FCC London meet ups, their details and highlight at which point of the FCC track are.

Through classes we are able then to filter campers are working or have completed some FCC track session and are willing to get contact from other campers in order to pair programming on specific FCC track point.

Here some tips on how fill fccLndDat.json:

[How to add your data to JSON](#how-to-add-your-data-to-JSON)

[Structure of camper object](#structure-of-camper-object)

[Classes you can use](#classes-you-can-use)








##### How to add your data to JSON


You should duplicate/fill in a JSON block of this kind:
```

          {
            "name":"Camper 3",
            "class":"frontend react html-css bootstrap FE-projects",
            "bio":"Logo for a screen printing company. They wanted a detachable/recognizable brand that didn't need the name of the company.",
            "pic":"assets/images/camper.png",
            "email":"something@gmail.com",
            "fcc":"http://google.com",
            "tw":"http://google.com",
            "lk":"http://google.com",
            "web":"http://google.com",
            "fb":"http://google.com",
            "challenge":"Pig Latin",
            "date":"24/4/16"
         },
```

pay attention that if your not first camper the block over your should end with

```
'},'
```

and again if you have other campers after your json block, your one need to end:

```
'},'
```

If you are the last campers in the JSON don't worry about comma, but should have other parenthesis after:

```
'         } //CLOSING YOU JSON BLOCK
      ]
   }
}
'
```
After you filled the JSON you can verify you have been filled correcly using tools such as [JSON validator](http://jsonlint.com/)

###Filling in

Thanks to ng-Sanitize, JSON fields are rendering HTML. So you can put links and quick style on it. Mainly you may want to use it for your Bio info.

Just remember if you are inserting a link to add:
 ```
    target="_blank"
 ```
 This way our little page will be still on user sight.
 
 We suggest your bio to be not longer than 120 words to avoid break layout. 







####*Structure of camper object:*####

**name** - your name -> REQUIRED

**class** - fill in with class corrisponding FCC sessions you have completed, that's use for filter your profile on camper page -> REQUIRED for references see at [Classes you can use](#classes-you-can-use)

**bio**- your presentation -> REQUIRED - max 120 words !!!!!

**pic** - path to your image es: assets/images/your-name.png" -> REQUIRED

**email** - youremail@something.com"   -> NOT COMPULSORY

**fcc**  -  path to your freecodecamp profile - -> REQUIRED

**tw** - path to your Twitter page -> NOT COMPULSORY

**lk**: - path to your LinkInd page -> NOT COMPULSORY

**web**  - path to your website / portfolio -> NOT COMPULSORY

**fb** - path to your facebook -> NOT COMPULSORY

**challenge** - Last  challenge performed or performing on FCC -> REQUIRED

**date** - date on which your updating status on FCC LND -> REQUIRED





####*Classes you can use:*####

The first level of filtering highlight which of the major FCC session Campers is working or has been working at. Every campers should have one or more. Please insert the session you are working on along with the past one if you are available to help other people with those.

#####*FILETERING FIRST LEVEL:*#####

1. FRONTEND -  `class = "frontend"`

2. DATA VISUALIZATION - `class = "data-visual"`

3. BACKEND - `class =" backend"`

The second level of filtering is pinpoint out exaclty at where point of the FCC you are. You can have more than one and even all the ones you have completed as long as you are willing help people are at that track point.

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


