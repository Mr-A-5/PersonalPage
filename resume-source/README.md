# Resume & cover letter source

`resume.html` and `cover-letter.html` are the editable sources for the PDFs in `public/`.
Edit the HTML, then re-render with headless Chrome:

```bash
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="../public/Res_07_26.pdf" "resume.html"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="../public/Cover_Letter_07_26.pdf" "cover-letter.html"
```

The resume is tuned to fit exactly one page — if you add a bullet, check the page
count before shipping.
