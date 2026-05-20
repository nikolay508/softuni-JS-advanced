function rectangle(width, height, color){
    color = color[0].toUpperCase() + color.slice(1);
    let rect = {width, height, color,
                
    calcArea(){return (width * height)}};
    return rect;
}
