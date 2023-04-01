An example we use if and else and for in pug template engine
/////////////////////// code start /////////////////////////

      
        main.shop_content
            if productArray.length > 0
                .grid 
                    each product in productArray 
                        artical.card.product_item 
                            header.card_header 
                                h1.product_title #{product.title}
                            div.card_image 
                                img(
                                    src="https://www.91-cdn.com/hub/wp-content/uploads/2022/04/Samsung-Galaxy-M33-5G-india-launch.jpg",
                                    alt="smartPhone")
                            .card_content 
                                h2.product_price $125
                                p.product_description best smartphone in the market 
                            card.action 
                                button.btn Add To Cart
            else 
                h1 No Products To Display    

/////////////////////// code start /////////////////////////

as you can see its very uncom to see syntax like this 
there is no brackets and block identification
and for is written in one line

    "each product in productArray "

and there is no mentioning of for  keyword anywere
and this is how we use for in pug template engine

