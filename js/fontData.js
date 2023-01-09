function extractFontData(font){
	/*console.log(font);*/

	let fontData = new Object();

	/* NAMES */

	/*ToDo accept other languages*/
	fontData.ID = font.names.uniqueID.en;
	fontData.version = font.names.version.en;

	fontData.fullName = font.names.fullName.en;
	
	if (font.names.preferredFamily){
		fontData.familyName = font.names.preferredFamily.en;
	}
	else fontData.fontFamily = font.names.fontFamily.en;

	if (font.names.preferredSubfamily){
		fontData.familySubname = font.names.preferredSubfamily.en;
	}
	else fontData.fontSubfamily = font.names.fontSubfamily.en;

	/* Raw style, gonna be used to assist in font submission */
	
	styleRaw = new Object();
	
	if(font.tables.fvar){ console.log("variable font currently unsupported"); }
	else{
		styleRaw.macStyle = NumToPseudoBoolArray(font.tables.head.macStyle, 8);
		styleRaw.fsSelection = NumToPseudoBoolArray(font.tables.os2.fsSelection);
		styleRaw.panose = font.tables.os2.panose;
	}

	/* Measurements */
	measurements = new Object();
	
	let height = ( font.ascender - font.descender );
	measurements.baselineHeight = -font.descender / height;
	measurements.xHeight = font.tables.os2.sxHeight / height;
	measurements.capHeight = font.tables.os2.sCapHeight / height;
	measurements.ascender = font.tables.os2.sTypoAscender / height;
	measurements.descender = -font.tables.os2.sTypoDescender / height;
	measurements.strikeoutHeight = font.tables.os2.yStrikeoutPosition / height;
	measurements.mWidth = font.unitsPerEm / height;
	
	/* Family data */
	let familyData = new Object();

	if (font.names.description){
		familyData.description = font.names.description.en; }
	
	if (font.names.sampleText){
		familyData.sampleText = font.names.sampleText.en; }
	
	if (font.names.copyright) familyData.copyright = font.names.copyright.en;
	if (font.names.trademark) familyData.trademark = font.names.trademark.en;
	
	familyData.foundry = font.names.manufacturer.en;
	if (font.names.manufacturerURL) familyData.foundryURL = font.names.manufacturerURL.en;

	familyData.designer = font.names.designer.en;
	if (font.names.designerURL) familyData.designerURL = font.names.designerURL.en;

	familyData.license = font.names.license.en;
	if (font.names.licenseURL) familyData.licenseURL = font.names.licenseURL.en;
	
	familyData.licenseType = font.tables.os2.fsType;

	familyData.isVariable = font.tables.fvar ? true : false;
	
	return {fontData, styleRaw, measurements, familyData};
}

/**
 * Converts text data from an object into a _innerHTML_ string. Do not use with self-referential objects. 
 * @param {Object} dataObject
 * @param {number} firstHeading The first level for headings. Default is 2
 * @returns 
 */
function objectToHTML(dataObject, firstHeading){
	let h = firstHeading ? firstHeading : 2;
	let text = `<h${h}>About the font:</h${h}>`;

	LoopObject(dataObject);

	function LoopObject(obj){
		let objs = [];
		let props = [];
		let arrs = [];

		for (const key in obj)
		{
			if(obj[key].constructor == Object){
				objs = objs.concat(key);
			}
			else {
				props = props.concat(key);
			}
		}

		/* Todo maybe on a list */
		text += `<ul>`;
		for(const i in props){
			text += `<li><b>${camelToDisplay(props[i])}</b>: ${obj[props[i]]}</li>`;
		}
		
		for(const i in objs){
			h++;
			text += `<li><h${h}>${camelToDisplay(objs[i])}</h${h}></li>`;
			LoopObject(obj[objs[i]]);
			h--;
		}
		text += `</ul>`
	}
	/*
	
	for(const key in fontData.fontData){
		text += `<b>${camelToDisplay(key)}</b>: ${fontData.fontData[key]}<br>`;
	}

	text += "</p><h3>Style:</h3><p>";

	for(const key in fontData.styleRaw){
		text += `<b>${camelToDisplay(key)}</b>: ${fontData.styleRaw[key]}<br>`;
	}
	
	text += "</p><h3>Sizing:</h3><p>";

	for(const key in fontData.measurements){
		text += `<b>${camelToDisplay(key)}</b>: ${fontData.measurements[key]}<br>`;
	}
	
	text += "</p><h2>About the family:</h2><p>";

	for(const key in fontData.familyData){
		text += `<b>${camelToDisplay(key)}</b>: ${fontData.familyData[key]}<br>`;
	}
	*/
	
	text += "</p>";
	return text;
}

/**
 * Appends a div with the data rendered as text
 * @param {string} string The text to append.
 * @param {Element} parentElement Container element
 * @param {string} clas Class to attach to child element.
*/
function appendText(string, parentElement, clas){
	let div = document.createElement('div');
	div.innerHTML = string;
	parentElement.appendChild(div);

	if(elementClass) div.classList.add(clas);
}

/**
 * Transform a number into a **string array** representation of a _bit array_. Optionally pads with 0's
 * @param {number} num Number to convert
 * @param {number} places Number of places to pad with 0
 * @returns Array of strings
 */
function NumToPseudoBoolArray(num, places){
	let numToStr = num.toString(2);

	let arr = []

	for(let i = numToStr.length - 1; i >= 0; i--){
		arr = arr.concat(numToStr[i]);
	}
	
	/* Pad with 0's */
	if (places){
		while(arr.length < places){
			arr = arr.concat("0");
		}
	}
	
	return arr;
}

/**
 * Transforms camelCase text to human-friendly Display Text
 * @param {string} string Text to transform 
 * @returns string
 */

function camelToDisplay(string){
	let newString = string[0].toUpperCase();

	for(let i = 1; i < string.length; i++){
		if (string[i] == string[i].toUpperCase() && string[i-1] != string[i-1].toUpperCase()){
			newString += " ";
		}
		newString +=string[i];
	}
	return newString;
}