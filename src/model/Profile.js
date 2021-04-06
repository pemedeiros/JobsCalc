const { update } = require("../controllers/ProfileController");

let data = {
        name: "Pedro",
        avatar: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.6435-9/137713986_3563593160405062_3427880035201295143_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHbDyTJwGCFbgQ6n1YuiQwRQd6yzp5sGa5B3rLOnmwZrrTLAJshlDJLe_odILv2EZQg_3kQDHrtDY30Yg7GNsiD&_nc_ohc=cjDBtUwxSoEAX_e3J1b&_nc_ht=scontent.fcgh2-1.fna&oh=feb86f92dcdbcde53789384ab5d9d2dd&oe=6089740D",
        "monthly-budget": 3000,
        "hours-per-day":5,
        "days-per-week":5,
        "vacation-per-year":4,
        "value-hour": 75
        }
    
module.exports ={
        get(){
                return data;
        },
        update(newData){
                data = newData;
        }
        }