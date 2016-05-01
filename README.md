### Test instructions
Tree structure exercise:

This exercise should be completed using Flux, React js and covered with unit tests preferably using Jasmine.

Part 1)

Render out a form comprising of 3 text fields and a button. The 3 text fields should be labelled as follows: "Advertiser", "Brand" and "Product". The button should be named "Add" and when clicked it should validate that the fields are not empty.

Part 2)

If the form is filled in with the following values Advertiser = "Unilever", Brand = "Dove", Product = "Axe" and validates it should render out a tree structure as follows.

    Unilever
        -> Dove
            -> Axe
                -> 12/04/2016 09:33:55

Underneath the product in this example "Axe" there should be the time at which the form was submitted. If the same values are entered again a new time should be added under the existing tree structure.

    Unilever
        -> Dove
            -> Axe
                -> 12/04/2016 09:33:55
                -> 12/04/2016 10:15:23

If new values are entered Advertiser = "P&G", Brand = "Gillette", Product = "Fusion ProGlide" they should be added as follows:

    Unilever
        -> Dove
            -> Axe
                -> 12/04/2016 09:15:55
                -> 12/04/2016 09:30:23
    P&G
        -> Gillette
            -> Fusion ProGlide
                -> 12/04/2016 10:01:18
## Requirements
* Gulp
* npm
* sass

## Installation
`npm install`
`bower install`

## gulp commands
`gulp wiredep` - add dependancies to html file
`gulp serve` - development
`gulp build` - build project


