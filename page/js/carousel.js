// Two-part paralax-like slider

var slider = {
    length: parseInt($("#content .page").length),
    current: 1,
    width: $("section#content").width(),
    next: function(){
        if(this.current < this.length){
            this.current = this.current + 1;
            this.animation();
        } else {
            this.current = 1;
            this.animation();
        }
    },
    animation: function(){
        var target = (0 - this.width) * (this.current - 1);
        this.run("#content", target);
        target = target * 2;
        this.run("#content", target);
    },
    prev: function(){
        if(this.current > 1){
            this.current = this.current - 1;
            this.animation();
        } else {
            this.current = this.length;
            this.animation();
        }
    },
    run: function(part, target){
        $(part + " .pan").stop().animate(
            {"margin-left": target},
            1000
        );
    },
    initialize: function(){
        $("#controls .next").click(function(){slider.next();});
        $("#controls .prev").click(function(){slider.prev();});
    }
}

slider.initialize();
