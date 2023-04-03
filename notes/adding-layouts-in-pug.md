Centeralised file for common use:
first copy a template and place it in the layout page
the template were are copying is 
//////////////// Code Space start ///////////////////////

doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title #{newTitle}
        <link rel="stylesheet" href="/css/404.css">
    body 
        header.main_header
            nav.main_navigation
                ul.main_list
                    li.main_list_items
                        a(href="/") shop 
                    li.main_list_items
                        a(href="/admin/Add_products") Add Product
        .main 
            h1.error_header_text Page Not Found from pug

//////////////// Code Space end ///////////////////////

Now above code is the layout we have chosen
and to edit some content and add new element dynamically we use a block statement
know as "block"

//////////////// Code Space start ///////////////////////

doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(http-equiv="X-UA-Compatible", content="IE=edge")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title #{newTitle}
        <link rel="stylesheet" href="/css/404.css">
        block styles
    body 
        header.main_header
            nav.main_navigation
                ul.main_list
                    li.main_list_items
                        a(href="/") shop 
                    li.main_list_items
                        a(href="/admin/Add_products") Add Product
        block content

//////////////// Code Space end ///////////////////////

1. now we will see how we use this block code to enter dynamic content
2. now go to the 404.pug file and remove everything and use an keyword called "extend"
    to get access of the template from layout page and write few lines in 404.pug page

its shown bellow
//////////////// Code Space start ///////////////////////

extends layouts/main-layout.pug

block content
    h1 page not found

//////////////// Code Space end ///////////////////////

and this is how you use them in template you are rendering
//////////////// Code Space start ///////////////////////

block styles
        link(rel="stylesheet", href="/css/shop.css")
        link(rel="stylesheet", href="/css/addProduct.css")

block content
    main.Product_content
        form.product_form(action="/admin/Add_products", method="POST") 
            h1.form_header Add your product
            hr
            .form_control
                label(for="product") Title
                input(type="text", name="title")
            button.product_button(type="submit") Add SmartPhones

//////////////// Code Space end ///////////////////////

with this approach you can use a centralised file for all your main templates
and any change you like to make in the layout you can just do it in the main layout


-------------------------------------------------------------------------------------------------------
one last thing setting up a active link

1. first we go admin.js file there we will add new variable called ="path" but this variable can be anything you like and its value is set dynamically also as shown bellow
//////////////// Code Space start ///////////////////////

router.get('/Add_products', (req, res, next) => {
    res.render('addProducts', { newTitle: 'Add Products', path: 'Dynamically_choicing_routes'})
})

//////////////// Code Space end ///////////////////////

as you can see we created a variable or object know as "path"
And its value is set to "Dynamically_choicing_routes"

and now we go to the main layout page and there we create a condition using question mark operator 
and set the active class. and an example is shown bellow
//////////////// Code Space start ///////////////////////

    li.main_list_items
        a(href="/admin/Add_products", class=(path === 'Dynamically_choicing_routes' ? 'active' : '' ))  Add Product

//////////////// Code Space end ///////////////////////

and this how you set for assigning dynamically setting active class to the links

now we do the same thing to shop
//////////////// Code Space start ///////////////////////

router.get('/', (req, res, next) => { 
    const product = adminData.products;
    //now you see we have changed the name of the "path object "
    res.render('shop', {productArray: product, newTitle: 'shop', path: 'Route_to_shop'})
})

//////////////// Code Space end ///////////////////////
because if you assign the same value the condition won't work
and this is how u use them in the mainlayout page

//////////////// Code Space start ///////////////////////

 header.main_header
            nav.main_navigation
                ul.main_list
                    li.main_list_items
                    // we changed the path object value name so that condition will work///
                        a(href="/", class=(path === 'Route_to_shop' ? 'active' : '' )) shop 
                    li.main_list_items
                        a(href="/admin/Add_products", class=(path === 'Dynamically_choicing_routes' ? 'active' : '' ))  Add Product
                            

//////////////// Code Space end ///////////////////////
with this we can now use dynamically change active class
