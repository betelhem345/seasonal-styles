$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        $("document").ready(function(){
            $('.seasons a').click(function(e){//find all a tags inside class of seasons
                e.preventDefault();//stop default submission
                var season = $(this).attr("href");//contents of href attribute of this element
                alert(season);
        
                switch(season){
                
                    case "Spring":{
                        $("html").css("background-color","#2B7129");
                        $("#wear").attr("src","images/spring-wear.jpg");
                        $("#logo").attr("src","images/spring.gif");
                        $("header h3").text("True style never dies!");
                    };
                    break; 
        
                    case "Summer":{
                        $("html").css("background-color","#EBA52B");
                        $("#wear").attr("src","images/summer-wear.jpg");
                        $("#logo").attr("src","images/summer.gif");
                        $("header h3").text("True style never dies!");
                    };
                    break; 
        
                    case "Fall":{
                        $("html").css("background-color","#A81124");
                        $("#wear").attr("src","images/fall-wear.jpg");
                        $("#logo").attr("src","images/fall.gif");
                        $("header h3").text("Be unique, be brave, be divine");
                    };
                    break; 
        
                    case "Winter":{
                        $("html").css("background-color","#005393");
                        $("#wear").attr("src","images/winter-wear.jpg");
                        $("#logo").attr("src","images/winter.gif");
                        $("header h3").text("Clothes that are sure to heat up your winter");
                    };
                    break; 
        
        
                    case "Default":{
                        $("html").css("background-color","black");
                        $("#wear").attr("src","https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2018/03/26112700/26032018_FancyPantsStore_01.jpg");
                        $("#logo").attr("src","images/four-seasons.gif");
                        $("header h3").text("Matching style and class with luxury and comfort");
                    };
                    break; 
        
        
        
        
        
                }
              
            });
        });
    });
});