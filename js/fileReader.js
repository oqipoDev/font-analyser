
function scanLocalFonts(baseURL, fontList){
	let fileList = new Array();

	for (fileName in fontList) {
		fileList = fileList.concat(`${baseURL}/${fileName}`);
	}
	
	createFontMetrics(fileList);
}

async function createFontMetrics(fontList)
{
	let fonts = new Array();
	
	for (let i = 0; i < fontList.length; i++) {
		let path = fontList[i];
		try {
			let font = await opentype.load(path);
			fonts[i] = ExtractFontData(font);
		} catch (error) {
			
		}
	}
	
	console.log(fonts);
}
