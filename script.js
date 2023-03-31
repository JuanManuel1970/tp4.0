
function genPDF(){
    var doc=new jsPDF();
    let mensaje=document.getElementById('escribime').value;
    doc.text(20,20,mensaje);
    doc.addPage();
    doc.text(20,20,'Mi trabajo!!');
    doc.save('Test.pdf');
}

