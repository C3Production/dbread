const path = require('path');
const nextTranslate = require('next-translate');

module.exports = {
  /* Add Scss File Folder Path Here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = {
  ...nextTranslate(),
};