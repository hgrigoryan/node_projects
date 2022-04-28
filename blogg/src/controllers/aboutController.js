function showAboutPage(req, res) {
    const aboutText = `Proin bibendum efficitur pharetra. Integer enim enim, pellentesque id imperdiet sed,
                      mollis sed enim. Nulla sit amet auctor orci. Curabitur non varius tellus,
                      at auctor mauris. Integer faucibus, velit vel pharetra dapibus, metus enim 
                      pellentesque ante, id vulputate nulla sem eget ligula. Vestibulum elementum nisi nulla, 
                      in varius enim efficitur quis.`;
    
  res.render("about.ejs", {aboutText: aboutText});
}

module.exports = showAboutPage;