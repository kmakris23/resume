#!/bin/bash

# Script to copy PORTFOLIO.md to public folder for serving
# This is automatically done during the build process, but can be run manually if needed

echo "Copying PORTFOLIO.md to public/portfolio.md..."

# Check if PORTFOLIO.md exists
if [ ! -f "PORTFOLIO.md" ]; then
    echo "Error: PORTFOLIO.md not found in the current directory"
    exit 1
fi

# Create public directory if it doesn't exist
mkdir -p public

# Copy the file
cp PORTFOLIO.md public/portfolio.md

if [ $? -eq 0 ]; then
    echo "Successfully copied PORTFOLIO.md to public/portfolio.md"
else
    echo "Error: Failed to copy PORTFOLIO.md"
    exit 1
fi