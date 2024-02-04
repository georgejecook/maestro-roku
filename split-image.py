from PIL import Image
import os

def split_image(input_path, output_dir, tile_size=(128, 128)):
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with Image.open(input_path) as img:
        img_width, img_height = img.size
        x_tiles = img_width // tile_size[0]
        y_tiles = img_height // tile_size[1]

        # Generate tiles
        tile_number = 1
        for y in range(y_tiles):
            for x in range(x_tiles):
                left = x * tile_size[0]
                upper = y * tile_size[1]
                right = left + tile_size[0]
                lower = upper + tile_size[1]

                tile = img.crop((left, upper, right, lower))
                tile_path = os.path.join(output_dir, "{}.png".format(tile_number))
                tile.save(tile_path)

                print("Tile {} saved: {}".format(tile_number, tile_path))
                tile_number += 1


# Example usage
input_path = '/tmp/gameart2d-desert.png'  # Change this to your input image path
output_dir = '/tmp/tiles'  # Change this to your desired output directory

# Uncomment the next line to run the function with the example paths
split_image(input_path, output_dir)
