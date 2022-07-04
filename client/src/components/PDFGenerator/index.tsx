// @ts-nocheck
import jsPDF from "jspdf";
import html2canvas from 'html2canvas'
import ReactDOMServer from "react-dom/server";
import  ResumeCard from '../ResumeCard'
const doc = new jsPDF();

const PDFGenerator = ({ component }: any) => {
    const save = () => {
        const input: any = document.getElementById('resumeToPrint')
        html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            format: "a3"
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
    };
      return (
        <div>
          <button onClick={save}>save</button>
        </div>
      );
}

export default PDFGenerator