// Image processing
    // ---------------------------------------------------------------------------
    responsive_images: {
      smallTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: "small-images",
            width: 240,
            quality: 60,
          },]
        },
        files: [{
          cwd: '_source-images/',
          src: ['**/*.{jpg,gif,png,jpeg}'],
          custom_dest: 'assets/images/{%= name %}/{%= path %}/',
          expand: true,
        }]
      },
      mediumTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: "medium-images",
            width: 720,
            quality: 60,
          },]
        },
        files: [{
          cwd: '_source-images/',
          src: ['**/*.{jpg,gif,png,jpeg}'],
          custom_dest: 'assets/images/{%= name %}/{%= path %}/',
          expand: true,
        }]
      },
      bigTask: {
        options: {
          engine: 'im',
          sizes: [{
            name: "big-images",
            width: 1920,
            quality: 60,
          },]
        },
        files: [{
          cwd: '_source-images/',
          src: ['**/*.{jpg,gif,png,jpeg}'],
          custom_dest: 'assets/images/{%= name %}/{%= path %}/',
          expand: true,
        }]
      },
    },
    // Main Image task
    // ---------------------------------------------------------------------------
    resize_crop: {
      smallTask: {
        options: {
          format: "{jpg,gif,png,jpeg}",
          gravity: "center",
          height: 160,
          width: 240,
          expand: true,
        },
        files: {
          'assets/images/small-images': [
            '_source-images/*.{jpg,gif,png,jpeg}',
          ],
        },
      },
      mediumTask: {
        options: {
          format: "{jpg,gif,png,jpeg}",
          gravity: "center",
          height: 460,
          width: 720,
          expand: true,
        },
        files: {
          'assets/images/medium-images': [
            '_source-images/*.{jpg,gif,png,jpeg}',
          ],
        },
      },
      bigTask: {
        options: {
          format: "{jpg,gif,png,jpeg}",
          gravity: "center",
          height: 1064,
          width: 1920,
          expand: true,
        },
        files: {
          'assets/images/big-images': [
            '_source-images/*.{jpg,gif,png,jpeg}',
          ],
        },
      },
    },

// ------------------------------------------------------------------------------------

// Image Task
grunt.registerTask('imagecheck', [
  'responsive_images',
  'resize_crop',
]);


