Types Of Template Engines:
---------------------------------

There are basically three types of template engines and they are
    1. Ejs
    2. Pug 
    3. Handlebars

1. ejs:
they use the same html elements but uses custom element for dynamic content

2. pug
they use custom template

3. handlebars
they work just like ejs with some more custom elements

Command for install this template Engines
//////////////// terminal commands for installing start /////////////////////////////////

    npm install --save ejs pug express-handlebars

//////////////// terminal commands for installing end /////////////////////////////////

theses will install all three of them in your project as a production dependencies

-------------------------------------------------------------------------------------------------------------------
APP SET(name, value):
------------------------------
The app.set() function is used to assign the setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. 
Syntax:
////////////////  code space start /////////////////////////////////

    app.set(name, value)

//////////////// code space  end /////////////////////////////////
Installation of the express module:

now an example code of how an pug syntax looks like
////////////////  code space start /////////////////////////////////

    doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title shop 
        link(rel="stylesheet", href="/css/shop.css")
        link(rel="stylesheet", href="/css/addProduct.css")
    body 
        header.main_header
            nav.main_navigation
                ul.main_list
                    li.main_list_items
                        a.active(href="/") shop 
                    li.main_list_items
                        a(href="/admin/Add_products") Add Product
        
        main.shop_content
           
//////////////// code space  end /////////////////////////////////

Now to use this template in our project we first goto the shop.js file
 now rather than using path and other element to loacte the template we use a simple syntax with a key element known as 
 "render"
 An example of this is given bellow
 ////////////////  code space start /////////////////////////////////

    router.get('/', (req, res, next) => { 
        const product = adminData.products;
        //now other than passing the template in res we also now pass an object that get its source from "admin.products"
        res.render('shop', {productObject: product, newTitle: 'shop'})
    })

//////////////// code space  end /////////////////////////////////

now in template we dynamically assign the title that us mentioned above as "newTitle: 'shop'"
in the shop.pug
 ////////////////  code space start /////////////////////////////////

     head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")

        //in the bellow you can see how we assigned the title dynamically
        title #{newTitle} 

        link(rel="stylesheet", href="/css/shop.css")
        link(rel="stylesheet", href="/css/addProduct.css")

//////////////// code space  end /////////////////////////////////
