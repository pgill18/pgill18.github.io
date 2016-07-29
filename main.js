//btn1Click()

function renderHomePage(index) {
	document.getElementById("panel-head1").innerHTML = flowPage.posts[index-1].next.posts[0].slides[0].head;
	document.getElementById("panel-head2").innerHTML = flowPage.posts[index-1].next.posts[1].slides[0].head;
	document.getElementById("panel-head3").innerHTML = flowPage.posts[index-1].next.posts[2].slides[0].head;
	document.getElementById("panel-body1").innerHTML = flowPage.posts[index-1].next.posts[0].slides[0].body;
	document.getElementById("panel-body2").innerHTML = flowPage.posts[index-1].next.posts[1].slides[0].body;
	document.getElementById("panel-body3").innerHTML = flowPage.posts[index-1].next.posts[2].slides[0].body;
}

function btn1Click() {
	renderHomePage(1);
}

function btn2Click() {
	renderHomePage(2);
}

function btn3Click() {
	renderHomePage(3);
}
