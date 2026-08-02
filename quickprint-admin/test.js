const bcrypt = require("bcrypt");

(async () => {
  const hash =
    "$2b$10$WLCcLeo579rqLbAI5UJhk.c3WGq/UPa162cpH1LdYbKpKx9Wa2BfC";

  const ok = await bcrypt.compare("123456", hash);

  console.log(ok);
})();