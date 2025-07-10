
import Note from '../models/Info.js'

// this is the function where you fetch all the data from your 'Info' Database collection
export async function getAllInfo(_req, res) {
try {
    await Info.find();
    res.status(200).json({message: "You have successfully fetched all the data from your 'Info' Database collection"});
} catch (error) {
    console.log("Error in getAllInfo function (infoController.js)");
    res.status(500).json({message: "Error is in the internal server"});

}
}

// this is the function where you add a new information to your 'Info' Database collection
export async function createInfo(req, res) {
    try {
        const {title, description, additionalDescription} = req.body;
        const newInfo = new Info({title, description, additionalDescription});
        await newInfo.save();
        res.status(201).json({message: "You have successfully posted an information"});
    } catch (error) {
        console.log("Error in createInfo function (infoController.js)");
        res.status(500).json({message: "Error is in the internal server"});
    }
}

// this is the function where you update an existing information in your 'Info' Database collection
export async function updateInfo(req, res) {
    try {
        const {title, description, additionalDescription} = req.body;
        const updatedInfo = await Info.findByIdAndUpdate(req.params.id, {title, description, additionalDescription}, {new: true});
        if (!updatedInfo) 
            return res.status(404).json({message: "Information does not exist"});
        res.status(200).json({message: "You have successfully updated the information"});
    } catch (error) {
        console.log("Error in updateInfo function (infoController.js)");
        res.status(500).json({message: "Error is in the internal server"});
    }
}

// this is the function where you delete an existing information in your 'Info' Database collection
export async function deleteInfo(req, res) {
    try {
        const deletedInfo = await Info.findByIdAndDelete(req.params.id);
        if (!deletedInfo) 
            return res.status(404).json({message: "Information does not even exist"});
        res.status(200).json({message: "You have successfully deleted the information"});
    } catch (error) {
        console.log("Error in deleteInfo function (infoController.js)");
        res.status(500).json({message: "Error is in the internal server"});
    }
}



