///find input
///common function
function getTheInput(element) {
    const infoHolder = document.getElementById(element);
    const infoHolderString = infoHolder.value;
    const infoInNumber = parseFloat(infoHolderString);
    return infoInNumber;
}

///Common: toggling the display field
function formCalling(selectForm) {
    const form = document.getElementById(selectForm);
    form.classList.toggle('hidden');
    return form;
}
///Triangle
function calculateTheTriangleOutput() {
    const triangle1 = getTheInput("triangleInputB");
    const triangle2 = getTheInput("triangleInputH");
    const tringleRegularValue = 0.5;
    if (isNaN(triangle1) || isNaN(triangle2)) {
        alert('Please Enter a Number');
        return;
    }
    else {
        const triangleResult = tringleRegularValue * triangle1 * triangle2;
        return triangleResult;
    }
}

function showTheTriangleOutput() {
    const resultForm = document.getElementById('resultTriangle');
    const result = parseFloat(calculateTheTriangleOutput().toFixed(2));
    resultForm.innerText = result;
    return result
}

///Rectangle
function calculateRectangle() {
    const inputW = getTheInput("rectangleInputW");
    const inputI = getTheInput("rectangleInputI");
    if (isNaN(inputI) || isNaN(inputW)) {
        alert('Please Enter a Number!');
        return;
    } else {
        const rectangleResult = inputI * inputW;
        return rectangleResult;
    }

}

function displayRectangle() {
    const resultHolder = document.getElementById('resultRectangle');
    const result=parseFloat(calculateRectangle().toFixed(2));
    resultHolder.innerText = result;
    return result;
}

///find innerText
///common function
function getInnerText(element){
    const value=document.getElementById(element)
    const valueString=value.innerText;
    console.log(valueString);
    const valueParseFloat=parseFloat(valueString);
    return valueParseFloat;
}
/// Parallelogram
function calculateParallelogram(){
    const value1=getInnerText('parallelogramB');
    const value2=getInnerText('parallelogramH');
    const area=parseFloat(value1*value2.toFixed(2));
    const display=document.getElementById('resultParallelogram');
    display.innerText=area;
    return display;
}
///pentagon
function calculatePentagon(){
    const value1=getInnerText('PentagonP');
    const value2=getInnerText('PentagonB');
    const value3=0.5;
    const area=parseFloat(value1*value2*value3.toFixed(2));
    const display=document.getElementById('resultPentagon');
    display.innerText=area;
    return display;
}
///Rhombus
function calculateRhombus(){
    const value1=getInnerText('rhombusD1');
    const value2=getInnerText('rhombusD2');
    const value3=0.5;
    const area=parseFloat(value1*value2*value3.toFixed(2));
    const display=document.getElementById('resultRhombus');
    display.innerText=area;
    return display;
}
///ELLIPSE
function calculateEllipse(){
    const value1=getInnerText('ellipseA');
    const value2=getInnerText('ellipseB');
    const value3=3.1;
    const area=parseFloat(value1*value2*value3.toFixed(2));
    const display=document.getElementById('resultEllipse');
    display.innerText=area;
    return display;
}
