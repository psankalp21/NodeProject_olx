"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connection_1 = __importDefault(require("./database/db.connection"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use(swagger_1.default);
app.use('/node', index_route_1.default);
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching result' });
//   }
// });
const startServer = async () => {
    try {
        await db_connection_1.default.authenticate();
        console.log('Database connection successful');
        await db_connection_1.default.sync();
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
startServer();
//# sourceMappingURL=index.js.map