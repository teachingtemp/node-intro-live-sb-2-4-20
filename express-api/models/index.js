let id = 27826

const db = {
  users: [
      { id: 27824, username: 'tom'},
      { id: 27825, username: 'sarah'},
  ],
  comments: [
      { id: 1, userId: 27824, content: 'What a time!'},
      { id: 2, userId: 27825, content: 'I think...'},
      { id: 3, userId: 27824, content: 'Amazing post'},
      { id: 4, userId: 27825, content: 'lorem ip sum comment'},
  ]
}

class User {
    constructor(user) {
        this.user = user;
    }

    async save() {
        //const userObj = { id: id++, username: this.username };
        this.user.id = id++;
        db.users.push(this.user);
        return Promise.resolve(this.user);
    }
}

function findAllUsers() {
    return Promise.resolve(db.users);
}

function findUser(id) {
    const user = db.users.find(user => user.id === Number(id));
    return Promise.resolve(user);
}

function findAllComments() {
    return Promise.resolve(db.comments);
}

function findComment(id) {
    const comment = db.comments.find(comment => comment.id === Number(id));
    return Promise.resolve(comment);
}

module.exports = {
    User,
    findAllUsers,
    findUser,
    findAllComments,
    findComment,
}