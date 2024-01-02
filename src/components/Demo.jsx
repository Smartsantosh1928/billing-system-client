import logo from '/react.svg';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from '@material-tailwind/react';

export function Demo() {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    });
  }

  const printPdf = () => {
    const capture = document.querySelector('.actual-receipt')
    setLoader(true)
    html2canvas(capture,{ scale: 3 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const width = pdf.internal.pageSize.getWidth()
      const height = pdf.internal.pageSize.getHeight()
      pdf.addImage(imgData, 'PNG', 0, 0, width, height)
      pdf.autoPrint()
      // window.print()
      window.open(pdf.output('bloburl'));
      setLoader(false)
    })
  }

  return (
    <div className="w-full h-auto flex justify-center items-center overflow-x-hidden">
      <div className="w-96 flex flex-col border border-gray-200">
        <div className="actual-receipt p-2 w-full flex flex-col items-center justify-center mt-7 bg-white">
          <div className="w-16 h-auto">
            <img alt="logo" src={logo} className="w-full h-full" />
          </div>
          <h5 className="font-semibold mt-5 text-base text-black">JS SOLUTIONS</h5>
          <h6 className="text-base text-black">ABC Street 123</h6>
          <h6 className="text-base text-black">Karachi Sindh 75050</h6>
          <div className="mt-0 text-base flex flex-col items-center text-black">
            <p>
              <a href={`mailto:anwarhamza919@gmail.com`} className="text-blue-500">
                anwarhamza919@gmail.com
              </a>
            </p>
            <p className="text-black">01234567890</p>
            <p>
              <a href="https://www.youtube.com/@jsSolutions" target="_blank" className="text-blue-500">
                https://www.youtube.com/@jsSolutions
              </a>
            </p>
          </div>
          <div className="mt-3 bg-blue-500 text-white flex w-full justify-between items-center p-2">
            <span>Payment Method</span>
            <span>Card Number</span>
          </div>
          <div className="flex w-full justify-between items-center bg-white text-gray-600 border-t border-gray-200 p-2">
            <span className="font-semibold">CREDIT</span>
            <span>************4444</span>
          </div>
          <div className="bg-blue-500 text-white flex w-full justify-between items-center p-2">
            <span>Campaign</span>
            <span>Amount</span>
          </div>
          <div className="flex w-full justify-between items-center bg-white text-gray-600 border-t border-gray-200 p-2">
            <span className="font-semibold">Dollar a Day for Sadaqa</span>
            <span>$ 50</span>
          </div>
          <div className="bg-blue-500 text-white flex w-full justify-between items-center p-2">
            <span>Transaction Details - Donations</span>
            <span />
          </div>
          <div className="flex w-full justify-between items-center bg-white text-gray-600 border-t border-gray-200 p-2">
            <span>
              <span className="font-semibold">MID:</span> 1234567
            </span>
            <span>
              <span className="font-semibold">Sequence #:</span> SSSSSSSS
            </span>
          </div>
          <div className="flex w-full justify-between items-center bg-white text-gray-600 border-t border-gray-200 p-2">
            <span>
              <span className="font-semibold">Invoice #:</span> AX1234ZVB5671234
            </span>
            <span>
              <span className="font-semibold">Created:</span> 2023-02-14 02:21:37
            </span>
          </div>
          <div className="flex w-full justify-between items-center bg-white text-gray-600 border-t border-gray-200 p-2">
            <span>
              <span className="font-semibold">Authentication #:</span> TEST
            </span>
            <span>
              <span className="font-semibold">Batch #:</span> 1234
            </span>
          </div>
          <div className="flex w-full justify-between bg-white p-2">
            <span className="font-semibold">Transaction: DemoROVED - 00</span>
            <span />
          </div>
          <div className="bg-blue-500 text-white flex w-full justify-between items-center p-2">
            <span>Thank You For Your Generous Donation</span>
            <span />
          </div>
        </div>
        <div className="w-full flex justify-between items-center mt-7 mb-7">
          <div className="w-full flex justify-center gap-10">
            <Button
              color="blue" fullWidth
              onClick={downloadPDF}
              disabled={!loader === false}
            >
              {loader ? "Downloading" : "Download"}
            </Button>
            <Button
              color="blue" fullWidth
              onClick={printPdf}
              disabled={!loader === false}
            >
              {loader ? "Printing" : "Print"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;