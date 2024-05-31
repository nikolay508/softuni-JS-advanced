function rectangle(width, height, color){
    color = color[0].toUpperCase() + color.substring(1, color.length);
    let rect = {width, height, color,
    calcArea(){return (width * height)}};
    return rect;
}