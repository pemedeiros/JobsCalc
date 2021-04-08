const Database = require('./config')

const initDb = {
   async init(){         

const db = await Database()

await db.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    avatar TEXT, 
    monthly_budget INT, 
    days_per_week INT,
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT
)`);

await db.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    daily_hours INT,
    total_hours INT,
    created_at DATETIME
)`)

await db.run(`INSERT INTO profile (
    name, 
    avatar, 
    monthly_budget, 
    days_per_week, 
    hours_per_day, 
    vacation_per_year,
    value_hour
 ) VALUES (
     "Pedro Augusto",
     "https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/137713986_3563593160405062_3427880035201295143_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHbDyTJwGCFbgQ6n1YuiQwRQd6yzp5sGa5B3rLOnmwZrrTLAJshlDJLe_odILv2EZQg_3kQDHrtDY30Yg7GNsiD&_nc_ohc=cjDBtUwxSoEAX_e3J1b&_nc_ht=scontent.fcgh2-1.fna&oh=feb86f92dcdbcde53789384ab5d9d2dd&oe=6089740D",
     3000,
     5,
     5,
     4,
     70
);`)

await db.run(`INSERT INTO jobs (
    name, 
    daily_hours,
    total_hours,
    created_at
) VALUES (
    "Pizzaria Guloso",
    2,
    1,
    1617514376018
);`)

await db.run(`INSERT INTO jobs (
    name, 
    daily_hours,
    total_hours,
    created_at
) VALUES (
    "OneTwo Projects",
    3,
    47,
    1617514376018
);`)

await db.close()
    }
}


initDb.init()