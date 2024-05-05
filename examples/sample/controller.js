const { AbstractController } = require("../../");
const { InMemoDatabase } = require("../dummy/database");

class TodoController extends AbstractController {

    /**
     * @type {InMemoDatabase}
     */
    Database = null;

    constructor(deps) {
        super(deps);
    }

    get__list(req, res, next, path = '/tasks') {
        this.Database.insert({ id: 1, name: "task_1" });
        const data = this.Database.get()
        return res.json(data);
    }

    get__listDoubleQUote(req, res, next, path = "/tasks_double_quote") {
        this.Database.insert({ id: 1, name: "task_1" });
        const data = this.Database.get()
        return res.json(data);
    }
}

module.exports.TodoController = TodoController;
