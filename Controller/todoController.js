import todoCollection from "../Model/todoModel.js"

export const addTodo = async (req, res) => {
    try {
        const data = new todoCollection(req.body);
        await data.save();
        res.status(201).json({ message: "data has been stored" }); // 201 - Created
    } catch (err) {
        res.status(500).json({ message: err }); // 500 - Internal Server Error
    }
}

export const getTodo = async (req, res) => {
    try {
        const data = await todoCollection.find();
        res.json(data);
        res.status(200).json({ message: "data has been fetched" })
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
        res.status(201).json({ message: "data has been updated" })
    } catch (err) {
        res.status(400).json({ message: err }); // 400 - Bad Request
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "data has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}