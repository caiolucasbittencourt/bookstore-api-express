import "dotenv/config";
import app from "./app.js";

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, (): void => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
