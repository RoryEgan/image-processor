// Image processing
  // ---------------------------------------------------------------------------
  responsive_images: {
    bigTask: {
      options: {
        engine: 'im',
        sizes: [{
          name: "big-images",
          width: 1920,
          quality: 70,
        },]
      },
      files: [{
        cwd: '_source-images/big-images',
        src: ['**/*.{jpg,gif,png}'],
        custom_dest: 'assets/images/{%= name %}/',
        expand: true,
      }]
    },
    mediumTask: {
      options: {
        engine: 'im',
        sizes: [{
          name: "medium-images",
          width: 720,
          quality: 70,
        },]
      },
      files: [{
        cwd: '_source-images/medium-images',
        src: ['**/*.{jpg,gif,png}'],
        custom_dest: 'assets/images/{%= name %}/',
        expand: true,
      }]
    }
  },
  // Main Image task
  // ---------------------------------------------------------------------------
  resize_crop: {
    mediumTask: {
      options: {
        format: "jpg",
        gravity: "center",
        height: 460,
        width: 720,
        expand: true,
      },
      files: {
        'assets/images/medium-images': [
          '_source-images/medium-images/*.{jpg,gif,png}',
        ],
      },
    },
    bigTask: {
      options: {
        format: "jpg",
        gravity: "center",
        height: 1064,
        width: 2000,
        expand: true,
      },
      files: {
        'assets/images/big-images': [
          '_source-images/big-images/*.{jpg,gif,png}',
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


