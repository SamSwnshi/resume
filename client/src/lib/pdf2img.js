import * as pdfjsLib from 'pdfjs-dist/build/pdf.mjs';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

let isLoading = false;
let loadPromise = null;

async function loadPdfJs() {
    // pdfjsLib is imported statically at top; it will always be loaded
    return pdfjsLib;
}

export async function convertPdfToImage(file) {
    try {
        console.log("Loading PDF.js library...");
        const lib = await loadPdfJs();
        console.log("PDF.js loaded:", lib);

        const arrayBuffer = await file.arrayBuffer();
        console.log("PDF arrayBuffer loaded, size:", arrayBuffer.byteLength);

        const pdf = await lib.getDocument({ data: arrayBuffer }).promise;
        console.log("PDF document loaded");

        const page = await pdf.getPage(1);
        console.log("Page 1 loaded");

        const viewport = page.getViewport({ scale: 4 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        console.log(`Canvas created (${canvas.width}x${canvas.height})`);

        if (context) {
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = "high";
        } else {
            throw new Error('Failed to get 2d canvas context');
        }

        await page.render({ canvasContext: context, viewport }).promise;
        console.log("Page rendered");

        return new Promise((resolve) => {
            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        console.log("Blob created");
                        const originalName = file.name.replace(/\.pdf$/i, "");
                        const imageFile = new File([blob], `${originalName}.png`, {
                            type: "image/png",
                        });
                        resolve({ imageUrl: URL.createObjectURL(blob), file: imageFile });
                    } else {
                        console.error("Failed to create image blob");
                        resolve({
                            imageUrl: "",
                            file: null,
                            error: "Failed to create image blob",
                        });
                    }
                },
                "image/png",
                1.0
            );
        });
    } catch (err) {
        console.error("Error converting PDF to image:", err, err.stack);
        return {
            imageUrl: "",
            file: null,
            error: `Failed to convert PDF: ${err.message || err}`,
        };
    }
}
