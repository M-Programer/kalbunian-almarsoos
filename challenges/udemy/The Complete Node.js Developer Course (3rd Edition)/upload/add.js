//...
const multer = require("multer")
const upload = multer({
	dest: "avatars"
})
router.post("/users/me/avatar", upload.single("pic"), (req, res) => {
	res.send()
})
//...