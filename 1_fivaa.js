function fivaa(num) {
	let str = []
	for(let i = num; i > 0; i--)
		str.push(`${i-1}`.repeat(2) + `${i+1}`.repeat(i))
	return str.join('\n')
}

module.exports = {
	fivaa
}