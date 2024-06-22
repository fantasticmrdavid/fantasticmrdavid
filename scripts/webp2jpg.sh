#!/bin/bash

# Ensure ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it and try again."
    exit 1
fi

# Loop through all .webp files in the current directory
for img in *.webp; do
    # Check if any .webp files are found
    if [ -e "$img" ]; then
        # Get the base name of the image file (without extension)
        base="${img%.*}"
        # Convert the image to .jpg format
        convert "$img" "$base.jpg"
        echo "Converted: $img -> $base.jpg"
    else
        echo "No .webp files found in the current directory."
        exit 1
    fi
done
