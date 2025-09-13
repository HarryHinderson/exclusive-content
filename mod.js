module.exports = {
  title: "Exclusive Content", 
  author: "Harry Hinderson",
  modVersion: "1.0",

  summary: "Ports exclusive content for convenient viewing within the UHC",
  description: `Ports loads of exclusive content from the Official Homestuck Discord to the UHC!`,

  // Add images to UHC
  trees: {
    './images/': 'assets://exclusive_content/'
  },
  edit(archive) {
      archive.tweaks.modHomeRowItems.push({
        href: "/mspa/004299",
        thumbsrc: "assets://exclusive_content/Icon.png",
        title: 'Exclusive Content',
        description: `<p>Special content posted exclusively for the Official Homestuck Discord</p>`
      });

    archive.mspa.story['004299'] = {
      "title": "Exclusive Content",
      "pageId": "004299",
      "timestamp": "",
      "flag": [],
      "media": [
      "assets://exclusive_content/book_art_sketch_and_alt.png",
      "assets://exclusive_content/cleanass_betakids.png",
      "assets://exclusive_content/cleanass_betakids2.png",
      "assets://exclusive_content/dave_book_cover.png",
      "assets://exclusive_content/sbahj1.png",
      "assets://exclusive_content/sbahj5.png",
      "assets://exclusive_content/sbahj7.png",
      "assets://exclusive_content/pesterquest_early.png",
      "assets://exclusive_content/pesterquest_early2.png",
      "assets://exclusive_content/pesterquest_early3.png",
      "assets://exclusive_content/pesterquest_early4.png",
      "assets://exclusive_content/horsaroni.png",
      "assets://exclusive_content/aspects.png"
      ],
      "content": "",
      "next": []
    }
  }
}