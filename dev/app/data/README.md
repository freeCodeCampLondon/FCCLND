##### How to add your data to JSON


You should duplicate/fill in a JSON block of thi kind:
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

'},'

and again if you have other campers after your json block, your one need to end:


'},'

If you are the last campers in the JSON don't worry about comma, but should have other parenthesis after:

'         } //CLOSING YOU JSON BLOCK
      ]
   }
}
'

###Filling in

*name* - your name -> REQUIRED

*class* - fill in with class corrisponding FCC sessions you have completed, that's use for filter your profile on camper page -> REQUIRED

####*Class you can use:*####

FILETERING FIRST LEVEL:

1. FRONTEND - class = "frontend"

2. DATA VISUALIZATION - class = "data-visual"

3. BACKEND - class =" backend"

FILTERING SECOND LEVEL :

*FRONTEND*

1. HTML / CSS - class ="html-css"

2. BOOTSTRAP  - class ="bootstrap"

3. Basic FrontEnd Development Projects - class="FE-projects"

4. Object Orientedand Functional Programming- class = "opp-f"

5 Basic Algorithm Scripting - class = 'basic-alghorithm'

6. AJAX - class ='ajax'

7. Intermedial FE projects - class ="inter-FE"

8. Intermedial Alghoritm - class = 'inter-alghorithm'

9. Advanced Algoritmi - class='adv-algorithm'

10. Advanced FE projects - class='adv-FE-project'

*VISUAL DATA*

1. SASS - class ="sass"

2. REACTJS - class = "react"

3. REACT PROJECTS - class = 'react-projects'

4. 3D - class ='3d'

5. Data Visuallization Projects - class= 'data-visual-project'


*BACKEND*

1. Test / Debugging - class='test-debug'

2. Git - class 'git'

3. NodeJS/Express - class ="nodeExpress"

4. Mongo DB - class='MongoDB'

5. ASPI Web Project - class= 'web-project'

6. No profit projects - class = 'NP-projects'


You can have more than one class for all FCC session you have been completed .


*bio*- your presentation -> REQUIRED

*pic* - path to your image es: assets/images/your-name.png" -> REQUIRED

*email* - youremail@something.com"   -> NOT COMPULSORY

*fcc*  -  path to your freecodecamp profile - -> REQUIRED

*tw* - path to your Twitter page -> NOT COMPULSORY

*lk*: - path to your LinkInd page -> NOT COMPULSORY

*web*  - path to your website / portfolio -> NOT COMPULSORY

*fb* - path to your facebook -> NOT COMPULSORY

*challenge* - Last  challenge performed or performing on FCC -> REQUIRED

*date* - date on which your updating status on FCC LND -> REQUIRED
