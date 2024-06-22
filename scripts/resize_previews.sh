#!/bin/bash

# Ensure ImageMagick is installed
if ! command -v mogrify &> /dev/null; then
    echo "ImageMagick is not installed. Please install it and try again."
    exit 1
fi

# Set maximum dimensions
MAX_SIZE=200

# Loop through all image files in the current directory containing "preview" in their filename
for img in *preview*.{jpg,jpeg,png,gif,bmp,tiff}; do
    # Check if any image files are found
    if [ -e "$img" ]; then
        # Resize the image to fit within the specified dimensions
        mogrify -resize "${MAX_SIZE}x${MAX_SIZE}>" "$img"
        echo "Resized: $img"
    fi
done
