#!/bin/bash
# Build script for resume
# Requires: pdflatex (sudo apt install texlive-latex-base texlive-fonts-recommended texlive-latex-extra)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Compiling resume.tex..."
pdflatex -interaction=nonstopmode resume.tex

# Compile twice to resolve references
pdflatex -interaction=nonstopmode resume.tex

# Copy to public directory
echo "Copying PDF to public directory..."
cp resume.pdf ../public/resume.pdf

# Cleanup auxiliary files
echo "Cleaning up auxiliary files..."
rm -f resume.aux resume.log resume.out

echo "✓ Resume built successfully!"
echo "  → Output: public/resume.pdf"
