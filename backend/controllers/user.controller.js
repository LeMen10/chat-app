import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const searchQuery = req.query.search?.trim();
        let filter = { _id: { $ne: loggedInUserId } };

        if (searchQuery) filter.fullName = { $regex: searchQuery, $options: "i" };
        const filteredUsers = await User.find(filter).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
