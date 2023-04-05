function slideCircle(){
    document.querySelectorAll(".slide")
        .forEach(function(slide){
            slide.addEventListener("mousemove", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(15% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });

            slide.addEventListener("mouseleave", function(dets){
                var dim = slide.getBoundingClientRect();
                this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`;
            });
        })
}

slideCircle();
            