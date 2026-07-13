// import pkg from "pg";

// const { Pool } = pkg;

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL, // Neon connection string
//   ssl: {
//     rejectUnauthorized: false, // required for Neon
//   },
// });

// // Test connection
// pool.connect()
//   .then(async (client) => {
//     console.log("✅ PostgreSQL connected");

//     const res = await client.query("SELECT current_database()");
//     console.log("CONNECTED DATABASE:", res.rows[0].current_database);

//     client.release();
//   })
//   .catch((err) => {
//     console.error("❌ DB CONNECTION FAILED");

//     console.error("👉 message:", err.message);
//     console.error("👉 code:", err.code);
//     console.error("👉 errno:", err.errno);
//     console.error("👉 syscall:", err.syscall);
//     console.error("👉 address:", err.address);
//     console.error("👉 port:", err.port);
//     console.error("👉 stack:", err.stack);

//     // 🔥 VERY IMPORTANT (for AggregateError)
//     if (err.errors) {
//       console.error("👉 inner errors:");
//       err.errors.forEach((e, i) => {
//         console.error(`  [${i}]`, {
//           message: e.message,
//           code: e.code,
//           address: e.address,
//           port: e.port,
//         });
//       });
//     }
//   });

// export default pool;

// import mysql from "mysql";

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "downpay",
// });

// con.connect((err) => {
//   if (err) {
//     console.error("DB connection failed:", err);
//   } else {
//     console.log("MySQL connected");

//     // ✅ ADD THIS
//     con.query("SELECT DATABASE()", (err, res) => {
//       if (err) {
//         console.error("DB name check failed:", err);
//       } else {
//         console.log("CONNECTED DATABASE:", res[0]["DATABASE()"]);
//       }
//     });
//   }
// });

// export default con;
import { neon } from "@neondatabase/serverless";

const db = neon(process.env.DATABASE_URL);

export default db;