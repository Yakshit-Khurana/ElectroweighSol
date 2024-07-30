document.getElementById("downloadBtn").addEventListener("click", function () {
	// Path to the PDF file
	const pdfUrl = "ELESOL Company catalogue.pdf";
	// Create an invisible link element
	const link = document.createElement("a");
	link.href = pdfUrl;
	// Set the download attribute with the filename
	link.download = "ELESOL.pdf";
	// Append the link to the body
	document.body.appendChild(link);
	// Programmatically click the link to trigger the download
	link.click();
	// Remove the link from the document
	document.body.removeChild(link);
});
