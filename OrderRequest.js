function validateORForm() {
	msg = ""
	ORform = document.OrderRequestForm
	PampersItem = ORform.item 
	PampersSize = ORform.size 
	qty = ORform.quantity
	fn = ORform.fname.value
	ln = ORform.lname.value
	s1 = ORform.st1.value
	ct = ORform.city.value
	st = ORform.state.value
	zp = ORform.zip.value

	itemChecked = false
	for (i = 0; i < PampersItem.length; i++) {
		if (PampersItem[i].checked) {
			itemChecked = true
			break
		}

	}
	if (!itemChecked) {
		msg += "You must choose one of the products.\n"
	}

	if (PampersSize.selectedIndex == "0") {
		msg += "You must select a product size.\n"
	}
	if (qty.selectedIndex == "0") {
		msg += "You must select a quantity number.\n"
	}
	if (fn.length == 0) {
		msg += "You must enter a first name.\n"
	}
	if (ln.length == 0) {
		msg += "You must enter a last name.\n"
	}
	if (s1.length == 0) {
		msg += "You must enter a street address.\n"
	}
	if (ct.length == 0) {
		msg += "You must enter a city.\n"
	}
	if (st.length == 0) {
		msg += "You must enter a state.\n"
	}
	if (zp.length == 0) {
		msg += "You must enter a zip code.\n"
	}
	else if (isNaN(zp)) {
		msg += "You must enter a 5-digit zip code.\n"
	}
	if (msg.length > 0) {
		alert(msg)
		return false
	}
	return true
}