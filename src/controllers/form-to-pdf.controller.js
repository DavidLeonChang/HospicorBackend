const fs = require('fs');
const puppeteer = require('puppeteer');

const form08pdf = async (req, res) => {
    const ruta = 'src/form/form08.html';
    try {
        const htmlContent = await getformhtml(ruta); // Retrieve HTML content
        const pdfBuffer = await htmlToPdf(htmlContent); // Generate PDF
        res.contentType('application/pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
};

function getformhtml(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading HTML file:', err);
                reject(err);
                return;
            }
            const databaseValues = {
                name: 'John Doe',
                email: 'john@example.com'
                // Add more values as needed
            };
            data = replacePlaceholders(data, databaseValues);
            resolve(data);
        });
    });
}

async function htmlToPdf(info) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(info);
    const pdf = await page.pdf({
        format: 'A4'
    });
    await browser.close();
    return pdf;
}

function replacePlaceholders(htmlContent, databaseValues) {
    // Replace placeholders in the HTML content with values from the database
    for (const key in databaseValues) {
        const placeholder = `{{${key}}}`;
        htmlContent = htmlContent.replace(new RegExp(placeholder, 'g'), databaseValues[key]);
    }
    return htmlContent;
}

/*const form08pdf = async (req, res)=>{
    const ruta = 'src/form/form08.html';
    try {
        res.contentType('application/pdf');
        res.send(await getformhtml(ruta));
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
}
async function getformhtml(ruta) {
    fs.readFile(ruta, 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading HTML file:', err);
            return;
        }
        return await htmlToPdf(data);
    });
    console.log("getting form...");
}
async function htmlToPdf(info) {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(info);
    const pdf = await page.pdf({
        format: 'A4', printBackground: true,
        margin: { left: "0.5cm", top: "2cm", right: "0.5cm", bottom: "2cm" },
        displayHeaderFooter: true,
        headerTemplate: `<div style="font-size: 30px">prueba</div>`,
        footerTemplate: `<div style="font-size: 30px">prueba</div>`
    });
    await browser.close();
    console.log(pdf);
    return pdf;
}*/
module.exports = {
    form08pdf
}