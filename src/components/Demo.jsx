import React, { useRef, useEffect } from 'react';
import Quagga from 'quagga';

export function Demo() {
  const barcodeFieldRef = useRef(null);

  useEffect(() => {
    const initBarcodeScanner = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        Quagga.init(
          {
            inputStream: {
              name: 'Live',
              type: 'LiveStream',
              target: barcodeFieldRef.current,
            },
            locator: {
              patchSize: 'medium',
              halfSample: true,
            },
            numOfWorkers: 4,
            decoder: {
              readers: ['ean_reader'],
            },
          },
          function (err) {
            if (err) {
              console.error(err);
              return;
            }
            Quagga.start();
          }
        );

        Quagga.onDetected(data => {
          const barcode = data.codeResult.code;
          barcodeFieldRef.current.value = barcode;
          console.log("Barcode detected and processed : [" + barcode + "]", data);
          // Optionally, you can stop the scanner after a successful scan
          // Quagga.stop();
        });

        return () => {
          Quagga.stop();
          stream.getTracks().forEach(track => track.stop());
        };
      }
    };

    initBarcodeScanner();
  }, []);

  return (
    <div>
      <input ref={barcodeFieldRef} placeholder="Scan barcode" />
    </div>
  );
}

export default Demo;
