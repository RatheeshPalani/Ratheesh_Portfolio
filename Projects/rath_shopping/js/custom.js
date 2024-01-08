$(document).ready(function()
{
    //search focus function
    $('.searchicon').click(function()
    {
        var b = $('.productsearch').val();
        if (b=="")
        {
            alert('please enter the product');
            $('.searchcontainer input').focus();
        }
    });

    //active shown in meanucontainer
    $(".buttondrop").click(function()
    {
        $(".buttondrop").removeClass('active');
        $(this).addClass('active');
    }
    );

    //product text shown in search input
    $('.dropdown-menu li').click(function()
    {
        var a=$(this).text();
        $('.productsearch').val(a);
    });

    //product container
    //1.slide image
    $('.borderimage').click(function()
    {
        $('.borderimage').removeClass('active');
        $(this).addClass('active');
    });

    //accordian
    $('.accmenu p').click(function()
    {
        $('.accmenu p').removeClass('active');
        $(this).addClass('active');
        var des=$(this).attr('title');
        $('.cont div').slideUp();
        $('.contents'+des).slideDown();
    });

    //product image slide
    $('.imgslide div').click(function()
    {
        var imagechange = $(this).attr("title");
        //alert(imagechange);
        //$('.bigimage img').addClass('active');
        $(".bigimage img").fadeOut();
        $('.hide'+imagechange).fadeIn('img');

        $('.bigimagecontent div').removeClass('active');
        $('.content'+imagechange).addClass('active');
    });

    

    //gridview listview
    $('.productlist i').click(function()
    {
        $('.productlist i').removeClass('active');
        $(this).addClass('active');

        var pagedesign=$(this).attr('title');
        //alert(pagedesign);


        $(".allover div").removeClass("showthegrid");
        $(".pagelayout"+pagedesign).addClass("showthegrid");
    });
    
    $(window).scroll(function()
    {
        if($(window).scrollTop()>1000)
        {
            $('.scroll-top').fadeIn(400);
        }
        else
        {
            $('.scroll-top').fadeOut(400);
            $('.scroll-top').removeClass('active');
        }
    });
    $('.scroll-top').click(function()
    {
        $('html,body').animate(
            {scrollTop:0},800
        );
        $(this).addClass('active');
    });

    $(".bottombuttons i").click(function()
    {
        $(this).toggleClass('active');
    });

    //Automatic changing of years
    document.querySelector('#copyright-year').innerText = new Date().getFullYear();

    //midmenucontainer
    $(".middlemenucontainer a").click(function()
    {
        $(".middlemenucontainer a").removeClass('active')
        $(this).addClass('active');
    });

    
    
});