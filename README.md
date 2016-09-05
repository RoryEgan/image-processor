## About this task:

This is a grunt task so it should be placed in the gruntfile of the website. It requires the "grunt-image-resize", "grunt-resize-crop", and "grunt-responsive-images" dependencies to be added to the package.json of the website. Running the command npm install should then install these dependencies.

The grunt imagecheck task is a task to compress and trim images. All initial images should be placed within a _source-images folder. I does not matter if you place any subdirectories inside the _source-images folder as the task will keep the directory structure of the _source-images folder.

The task is run with the command grunt imagecheck. When the task is run it will create three folders inside assets/images called big-images, medium-images and small-images if they do not already exist. The task scales the images that will go in the big folder to a width of 1920px, the images to go to the medium folder to width of 720px and the images to go in the small folder to a width of 240px. All images have their quality degraded to 60% in order to reduce file size. Once the images have been scaled and reduced in quality the task will crop the big images to a height of 1064px, the medium images to a height of 460px and the small images to a height of 160px.

The task creates big, medium and small versions of all images and subdirectories in the _source-images folder. If there is for example a _source-images folder containing an image and a subdirectory containing another image, once the task is run there will be a big, medium and small version of the first image and the image in the subdirectory(with the same directory structure as in the _source-images folder) in each of the big, medium and small folders inside in assets/images. If there are already existing images of the same names as the newly processed images, the task will overwrite them to the new and processed version.

