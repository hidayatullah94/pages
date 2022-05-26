let ghpages = require("gh-pages");

ghpages.publish(
  "public",

  {
    branch: "master",
    repo: "https://github.com/hidayatullah94/pages.git", // Update to point to your repository
    user: {
      name: "hidayat", // update to use your name
      email: "hidayatullah1780@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
