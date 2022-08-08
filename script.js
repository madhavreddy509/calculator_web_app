function display(val)
{
	document.getElementById("result").value+=val
	
	return val
}

function solve()
{
	let x=document.getElementById("result").value
	
	y=eval(x)
	
	document.getElementById("result").value=y
	
	return y
	
}

function clearscreen()
{
	
	document.getElementById("result").value=""
	
}

function sq()
{
	
	let x=document.getElementById("result").value
	
	y=Math.sqrt(x)
	
	document.getElementById("result").value=y
	
	return y

}

function lg()
{
	
	let x=document.getElementById("result").value
	
	y=Math.log10(x)
	
	document.getElementById("result").value=y
	
	return y

}

function lg2()
{
	
	let x=document.getElementById("result").value
	
	y=Math.log2(x)
	
	document.getElementById("result").value=y
	
	return y

}

function sin1()
{
	
	let x=document.getElementById("result").value
	
	y=Math.sin(x)
	
	document.getElementById("result").value=y
	
	return y

}

function cos1()
{
	
	let x=document.getElementById("result").value
	
	y=Math.cos(x)
	
	document.getElementById("result").value=y
	
	return y

}

function tan1()
{
	
	let x=document.getElementById("result").value
	
	y=Math.tan(x)
	
	document.getElementById("result").value=y
	
	return y

}

function round1()
{
	
	let x=document.getElementById("result").value
	
	y=Math.round(x)
	
	document.getElementById("result").value=y
	
	return y

}

