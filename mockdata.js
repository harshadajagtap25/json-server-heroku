// https://www.npmjs.com/package/casual
// https://www.npmjs.com/package/faker
const casual = require("casual");
const faker = require("faker");

// Create an object for config file
const db = {
  //books:[],
  // dogs: [],
  // posts: [],
  // comments: [],
  furniture: [],
  wishlisted: [],
};

for (let i = 1; i <= 5; i++) {
  // books:
  // db.books.push({
  //     id: i,
  //     title: casual.words(casual.integer(1,6)),
  //     author: casual.first_name + ' ' + casual.last_name,
  //     rating: Math.floor(Math.random()*100+1)/20,
  //     year_published: casual.integer(1700,2019)
  // });

  // users:
  // db.dogs.push({
  //   id: i,
  //   name: casual.name,
  //   age: casual.age,
  //   place: casual.place,
  //   gender: casual.gender,
  // });
  db.furniture.push({
    id: i,
    type: casual.type,
    year: casual.year,
    Description: casual.Description,
    price: casual.price,
  });
  db.wishlisted.push({
    id: i,
    type: casual.type,
    year: casual.year,
    Description: casual.Description,
    price: casual.price,
  });

  // blog posts
  // db.posts.push({
  //   id: i,
  //   title: casual.title,
  //   body: casual.sentences((n = casual.integer(10, 20))),
  //   user_id: casual.integer(1, 10),
  //   date: casual.date((format = "YYYY-MM-DD")),
  //   images: [faker.random.image(), faker.random.image()],
  // });

  // // comments
  // for (let j = 1; j <= casual.integer(1, 5); j++) {
  //   db.comments.push({
  //     id: db.comments.length + 1,
  //     post_id: i,
  //     body: casual.sentences((n = casual.integer(2, 10))),
  //     date: casual.date((format = "YYYY-MM-DD")),
  //   });
  // }
}
console.log(JSON.stringify(db));
