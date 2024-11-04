// Custom function to create a canvas and return a message
function createCanvasExample() {
  // Create an HTML template with a canvas element
  const htmlString = `
    <html>
      <body>
        <canvas id="myCanvas" width="200" height="200" style="border:1px solid #000000;"></canvas>
        <script>
          var canvas = document.getElementById('myCanvas');
          var context = canvas.getContext('2d');
          context.fillStyle = 'red';
          context.fillRect(10, 10, 180, 180);
        </script>
      </body>
    </html>
  `;
  
  // Output the HTML as a dialog in example Sheets
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(HtmlService.createHtmlOutput(htmlString), 'Canvas Example');
  
  return "Created a canvas example";
}

// To call this function from a cell in example Sheets, use:
// =createCanvasExample()
