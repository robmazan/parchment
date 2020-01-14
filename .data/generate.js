const _ = require("lodash");
const faker = require("faker");

module.exports = () => ({
    authors: _.times(100, i => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        return {
            id: i,
            userName: faker.internet.userName(firstName, lastName),
            firstName,
            lastName,
            email: faker.internet.email(firstName, lastName),
            avatar: faker.internet.avatar(),
        }
    }),

    categories: [
        { id: 0, name: "News"},
        { id: 1, name: "Sport"},
        { id: 2, name: "Travel"},
        { id: 3, name: "Culture"},
        { id: 4, name: "Music"},
        { id: 5, name: "TV"},
    ],

    posts: _.times(1000, i => ({
        id: i,
        authorId: _.random(100),
        categoryId: _.random(5),
        title: faker.lorem.sentence(),
        excerpt: faker.lorem.paragraph(),
        content: faker.lorem.paragraphs(5, '<br>'),
    })),

    comments: _.times(5000, i => ({
        id: i,
        postId: _.random(1000),
        commenter: faker.internet.email(),
        content: faker.lorem.paragraphs(5, '<br>'),
        created: faker.date.past()
    })),
})