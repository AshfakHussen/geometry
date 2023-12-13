document.getElementById('triangleBtn').addEventListener('click', function () {
    showTheTriangleOutput();
    formCalling('result-Form-Triangle');
})
document.getElementById('rectangleBtn').addEventListener('click', function () {
    displayRectangle();
    formCalling('result-Form-Rectangle');
})
document.getElementById('parallelogramBtn').addEventListener('click', function () {
    calculateParallelogram();
    formCalling('result-Form-Parallelogram');
})
document.getElementById('pentagonBtn').addEventListener('click', function () {
    calculatePentagon();
    formCalling('result-Form-Pentagon');
})
document.getElementById('rhombusBtn').addEventListener('click', function () {
    calculateRhombus();
    formCalling('result-Form-Rhombus');
})
document.getElementById('ellipseBtn').addEventListener('click', function () {
    calculateEllipse();
    formCalling("result-Form-Ellipse");
})
///blog button
document.getElementById('btnBlog').addEventListener('click', function () {
    window.open('http://127.0.0.1:5500/blog.html', '_blank');

})