function j_d_select ( sel )
{
	document.getElementById("m-detail-inbox-a").style.display = 'none';
	document.getElementById("m-detail-inbox-b").style.display = 'none';
	document.getElementById("m-detail-inbox-c").style.display = 'none';
	
	if (sel == 0)
		document.getElementById("m-detail-inbox-a").style.display = 'block';
	if (sel == 1)
		document.getElementById("m-detail-inbox-b").style.display = 'block';
	if (sel == 2)
		document.getElementById("m-detail-inbox-c").style.display = 'block';
	
}