#!/bin/bash

# Ensure ImageMagick is installed
if ! command -v mogrify &> /dev/null; then
    echo "ImageMagick is not installed. Please install it and try again."
    exit 1
fi

# Set maximum dimensions
MAX_HEIGHT=1080
MAX_WIDTH=1440

# Loop through all image files in the current directory
for img in *.{jpg,jpeg,png,gif,bmp,tiff}; do
    # Check if any image files are found
    if [ -e "$img" ]; then
        # Resize the image to fit within the specified dimensions
        mogrify -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" "$img"
        echo "Resized: $img"
    fi
done
