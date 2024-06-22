function calcular_promedio() {
    var ramo = prompt("Ingrese el ramo: ");

    if (ramo == "html") {
        var nota_1_html = parseInt(prompt("Ingrese nota 1 [HTML]: "));
        var nota_2_html = parseInt(prompt("Ingrese nota 2 [HTML]: "));
        var nota_3_html = parseInt(prompt("Ingrese nota 3 [HTML]: "));
        var promedio_html = (nota_1_html + nota_2_html + nota_3_html) / 3;
        console.log(nota_1_html, nota_2_html, nota_3_html, promedio_html);
        document.getElementById("nota_1_html").innerHTML = nota_1_html;
        document.getElementById("nota_2_html").innerHTML = nota_2_html;
        document.getElementById("nota_3_html").innerHTML = nota_3_html;
        document.getElementById("promedio_html").innerHTML = promedio_html.toFixed(2);
    } else if (ramo == "css") {
        var nota_1_css = parseInt(prompt("Ingrese nota 1 [CSS]: "));
        var nota_2_css = parseInt(prompt("Ingrese nota 2 [CSS]: "));
        var nota_3_css = parseInt(prompt("Ingrese nota 3 [CSS]: "));
        var promedio_css = (nota_1_css + nota_2_css + nota_3_css) / 3;
        console.log(nota_1_css, nota_2_css, nota_3_css, promedio_css);
        document.getElementById("nota_1_css").innerHTML = nota_1_css;
        document.getElementById("nota_2_css").innerHTML = nota_2_css;
        document.getElementById("nota_3_css").innerHTML = nota_3_css;
        document.getElementById("promedio_css").innerHTML = promedio_css.toFixed(2);
    } else {
        // ramo == javascript
        var nota_1_js = parseInt(prompt("Ingrese nota 1 [JS]: "));
        var nota_2_js = parseInt(prompt("Ingrese nota 2 [JS]: "));
        var nota_3_js = parseInt(prompt("Ingrese nota 3 [JS]: "));
        var promedio_js = (nota_1_js + nota_2_js + nota_3_js) / 3;
        console.log(nota_1_js, nota_2_js, nota_3_js, promedio_js);
        document.getElementById("nota_1_js").innerHTML = nota_1_js;
        document.getElementById("nota_2_js").innerHTML = nota_2_js;
        document.getElementById("nota_3_js").innerHTML = nota_3_js;
        document.getElementById("promedio_js").innerHTML = promedio_js.toFixed(2);
    }
}