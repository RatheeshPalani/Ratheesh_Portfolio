$(document).ready(function()
{
    //headercontainer page changing
    var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
    //alert(filename);
    $('.menucontainer a').each(function()
    {
        var content=$(this).attr('href');
        //alert(content);
        if(content == filename)
        {
            $(this).addClass('active');
        }
    });
    
    //bodycontainer shopping button
    $('.bodycontainer button').click(function()
    {
        $(this).toggleClass('active');
    });

    //vegcontainer active
    $('.veg').click(function()
    {
        $('.veg').removeClass('active');
        $(this).addClass('active');
    });

    //accordian function
    $('.subacc a').click(function()
    {
        $('.subacc a').removeClass('active');
        $(this).addClass('active');
        $('.subacc div').slideUp();
        var a=$(this).attr('title');
        $('.content'+a).slideDown();
    });

    //focus email
    $('.fcon3 a').click(function()
    {
        var a=$('.fcon3 input').attr('value');
        if(a=="")
        {
            $("input").focus();
        }
    });

    $(".headercontainer i").click(function()
    {
        $(this).addClass('active');
        $(".menucontainer").slideDown();
    });

    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

    //Automatic changing of years
    document.querySelector('#copyright-year').innerText = new Date().getFullYear();
});
