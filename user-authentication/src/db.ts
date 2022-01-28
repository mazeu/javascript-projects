import {Pool} from 'pg';

const connectionString = 'postgres://ymmalvhb:KsOly8MMwpOFRb6c9YGj6JjBO8OYkFmp@kesavan.db.elephantsql.com/ymmalvhb';

const db = new Pool({ connectionString});

export default db;