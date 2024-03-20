const fs = require('fs');
const puppeteer = require('puppeteer');

const form08pdf = async (req, res) => {
    const ruta = 'src/form/form008.html';
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
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: `<style>#f1{font:bold 16pt "Arial";text-decoration:underline;color:#000000}</style>
<span style="position:absolute;top:4pt;left:271pt" id=f1>ANGIO MANABI</span>
<style>#f2{font:bold 10pt "Courier New";color:#000000}</style>
<span style="position:absolute;top:22pt;left:282pt" id=f2>CALLE 18 Y AV. 37</span>
<style>#f3{font:bold 16pt "Arial";color:#000000}</style>
<span style="position:absolute;top:36pt;left:256pt" id=f3>E M E R G E N C I A</span>
<span style="position: absolute; top:9.0pt;left:22.5pt; width:128.1pt;height:45.0pt; "><img src=Form008_em0.jpg width=171 height=60 border=0"> </span>
<span style="position: absolute; top:27.0pt;left:490.5pt; width:76.5pt;height:32.6pt; "><img src=Form008_em1.jpg width=102 height=43 border=0"> </span>
        `,
        footerTemplate: `
        <div>
            <style>#f1{font:bold 10pt "Arial";text-decoration:underline;color:#000000}</style>
                  
                <span  id=f1>SNS-MSP/HCU-form.008/2021</span>

                <span  id=f1>Emergencia</span>
                <span id=f1 class="pageNumber"></span>   
                <span  id=f1> / </span>     
                <span id=f1 class= "totalPages"></span>
            
        </div>`,
        margin: { top: "75px", bot: "50px" }
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
        headerTemplate: `<style>#f1{font:bold 16pt "Arial";text-decoration:underline;color:#000000}</style>
<span style="position:absolute;top:4pt;left:271pt" id=f1>ANGIO MANABI</span>
<style>#f2{font:bold 10pt "Courier New";color:#000000}</style>
<span style="position:absolute;top:22pt;left:282pt" id=f2>CALLE 18 Y AV. 37</span>
<style>#f3{font:bold 16pt "Arial";color:#000000}</style>
<span style="position:absolute;top:36pt;left:256pt" id=f3>E M E R G E N C I A</span>
<span style="position: absolute; top:9.0pt;left:22.5pt; width:128.1pt;height:45.0pt; "><img src=Form008_em0.jpg width=171 height=60 border=0"> </span>
<span style="position: absolute; top:27.0pt;left:490.5pt; width:76.5pt;height:32.6pt; "><img src=Form008_em1.jpg width=102 height=43 border=0"> </span>`,
        
    });
    await browser.close();
    console.log(pdf);
    return pdf;
}*/
module.exports = {
    form08pdf
}