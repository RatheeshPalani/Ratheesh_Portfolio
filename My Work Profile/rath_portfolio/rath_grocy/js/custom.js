$(document).ready(function()
{

    //indexpage
    //search focus function
    $('.searchicon').click(function()
    {
        var b =$('.productsearch').val();
        if(b=="")
        {
            alert('Please enter the product');
            $(".productsearch").focus();
        }
    });
    $('.dropdown-menu li').click(function()
    {
        var tex=$(this).text();
        $(".productsearch").val(tex);
    });

    //change of container in indexpage
    $('.menucontainer h4').click(function()
    {
        $('.menucontainer h4').removeClass('active');
        $(this).addClass('active');
        var tit = $(this).attr('title');
        
        $('.breakfastcontainer div').removeClass('active');
        $(".breakfast"+tit).addClass('active');
    });

    //product detailpage slides

    
    $('.smallimg a').click(function()
    {
        var dat=$(this).attr('title');

        $('.bigimg img').removeClass('active');
        $(".bigimg"+dat).addClass('active');

        $('.bigimgcontent div').removeClass('active');
        $('.bigimgcontent'+dat).addClass('active');
    });


    
    //accordian for review of the product
    

    $('.productreviewheader a').click(function()
    {
        $('.productreviewheader a').removeClass('active');
        $(this).addClass('active');
        var acc=$(this).attr('title');

        $('.reviewcont div').slideUp();
        $('.productparagraph'+acc).slideDown();
    });

    //product list and grid view change

    $('.listfunction').click(function()
    {
        $('.listcontainer').show();
        $('.gridcontainer').hide();
    });
    $('.gridfunction').click(function()
    {
        $('.gridcontainer').show();
        $('.listcontainer').hide();
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
});