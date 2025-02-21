$(".accordeon__header").click(function() {
    
    let accordeon = $(this).parents(".accordeon")
    
    accordeon.toggleClass("accordeon_open");
})