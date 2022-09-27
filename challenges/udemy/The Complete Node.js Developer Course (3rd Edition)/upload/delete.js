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
router.delete("/users/me/avatar", auth, upload.single("pic"), async (req, res) => {
	req.user.avatar = undefined
	await req.user.save()
	res.send()
})
//...