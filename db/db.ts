import ms from "mysql";

export const pool = ms.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB as string,
});

export function ConnectSQL() {
  pool.getConnection((err: any, connection: any) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.message);
      throw err;
    }

    console.log("Connected to MySQL");

    connection.on("error", (error: any) => {
      if (error.code === "PROTOCOL_CONNECTION_LOST") {
        console.error("Connection lost. Reconnecting...");
        ConnectSQL();
      } else {
        throw error;
      }
    });

    connection.release();
  });
}
