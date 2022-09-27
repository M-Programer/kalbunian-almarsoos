//...
const multer = require("multer")
const upload = multer({
	dest: "avatars",
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(jpe?g)|(png)$/)) {
			return cb(new Error("Expected a word doc"))
		}
		cb(undefined, true)
	},
	limits: {
		fileSize: 1000000,
	}
})
router.post("/users/me/avatar", upload.single("pic"), (req, res) => {
	res.send()
})
//...