// account.js
function cancel(email, name) {
	sgMail.send({
		from: "my@email.address",
		to: email,
		text: `Why did you leave, ${name}?`
	})
}

module.exports = {
	//...
	cancel,
}

// user.js
router.delete("/users/me", auth, async (req, res) => {
	try {
		await req.user.remove()
		cancel(req.user.email, req.user.name)
		//...
	} catch (err) {
		//...
	}
})