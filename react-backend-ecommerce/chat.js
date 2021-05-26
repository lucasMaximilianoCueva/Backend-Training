import knexFunc from "knex";

class ChatDB {
  constructor(config) {
    this.knex = knexFunc(config);
  }
  createTable() {
    return this.knex.schema.dropTableIfExists('chat').then(() => {
      return this.knex.schema.createTableIfNotExists('chat', table => {
        table.string('author',100);
        table.string('time', 20)
        table.string('text',6000);
      });
    });
  }
  insert(items) {
    return this.knex("chat").insert(items);
  }
  list() {
    return this.knex("chat").select();
  }
  close() {
    return this.knex.destroy();
  }
}

export default ChatDB;