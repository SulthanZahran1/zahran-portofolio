# Resume

This directory contains the LaTeX source for Sulthan Zahran's resume.

## Building the Resume

### Prerequisites

Install LaTeX (if not already installed):

```bash
# Ubuntu/Debian
sudo apt install texlive-latex-base texlive-fonts-recommended texlive-latex-extra texlive-fonts-extra

# macOS (using MacTeX)
brew install --cask mactex

# Windows
# Download and install MiKTeX from https://miktex.org/download
```

### Compile

Run the build script:

```bash
cd resume
chmod +x build.sh
./build.sh
```

Or compile manually:

```bash
cd resume
pdflatex resume.tex
pdflatex resume.tex  # Run twice for proper references
cp resume.pdf ../public/resume.pdf
```

The compiled PDF will be copied to `public/resume.pdf` and will be available for download on the portfolio website.

## Updating the Resume

1. Edit `resume.tex`
2. Run `./build.sh`
3. Commit both `resume.tex` and `public/resume.pdf`
4. Deploy

## Online Editing

You can also edit this resume on Overleaf:
https://www.overleaf.com/read/fdtjwswcxqpg#67d619

If you make changes on Overleaf, copy the updated LaTeX code back to `resume.tex` and rebuild.
