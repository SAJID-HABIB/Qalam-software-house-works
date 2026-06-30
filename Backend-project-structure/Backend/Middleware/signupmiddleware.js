const { SignupSchema } = require("../Validation/Authvalidation");

const validateSignup = async (req, res, next) => {
    try {
        
        const validateData = await SignupSchema.safeParseAsync(req.body);

        if (!validateData.success) {
            console.log(validateData.error.issues)
            const collectErrors = validateData.error.issues.map((v) => {
               return { field: v.path[0] || "global", message: v.message };
            });

            return res.status(400).json({
                success: false,
                message: "Invalid input",
                payload: null,
                errors: collectErrors
            });
        }

        req.sanitizedBody = validateData.data;
        
        next();
        
    } catch (error) {
        console.error("Internal Middleware Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = { validateSignup };