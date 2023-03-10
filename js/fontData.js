function extractFontData(font){
	/*console.log(font);*/

	let fontData = new Object();
	let errors = [];
	let warnings = [];

	/**
	 * Returns _property_ if found, measures a _glyph_ otherwise. Returns _null_ if no glyph is found.
	 * @param {any} property The value to check for 
	 * @param {string} propName For error reports
	 * @param {string} char Character of glyph, measured as fallback for _property_
	 * @param {key} charKey Any of [xMin, xMax, yMin, yMax]
	 * @param {any} notEqual (Optional) Forces glyph measurement if it's equal to property
	 */
	function propertyOrGlyphSize(property, propName, char, charKey, notEqual){
		if (property == undefined || property == notEqual){
			if(getCharSize(char, font)){
				warnings = warnings.concat(propName);
				return getCharSize(char, font)[charKey];
			}

			else {
				errors = errors.concat(propName);
				return null;
			}
		}
		else return property;
	}

	/* NAMES */

	/* ToDo accept other languages */
	fontData.ID = font.names.uniqueID.en;
	
	if (font.names.preferredFamily) fontData.familyName = font.names.preferredFamily.en;
	else fontData.fontFamily = font.names.fontFamily.en;
	
	if (font.names.designerName) fontData.designerName = font.names.designer.en;
	if (font.names.designerURL) fontData.designerURL = font.names.designerURL.en;
	if (font.names.foundryName) fontData.foundryName = font.names.manufacturer.en;
	if (font.names.manufacturerURL) fontData.foundryURL = font.names.manufacturerURL.en;
	if (font.names.copyright) fontData.copyright = font.names.copyright.en;
	if (font.names.trademark) fontData.trademark = font.names.trademark.en;
	fontData.licenseType = font.tables.os2.fsType;
	if (font.names.license) fontData.license = font.names.license.en;
	if (font.names.licenseURL) fontData.licenseURL = font.names.licenseURL.en;
	if (font.names.sampleText) fontData.sampleText = font.names.sampleText.en;
	if (font.names.description) fontData.description = font.names.description.en;
	fontData.version = font.names.version.en;

	
	let macStyle = NumToBoolArray(font.tables.head.macStyle, 8);
	let fsSelection = NumToBoolArray(font.tables.os2.fsSelection, 10);
	fontData.panoseStyle = font.tables.os2.panose;
	fontData.IBMStyle = font.tables.os2.sFamilyClass;


	/* Variable font */
	fontData.isVariable = font.tables.fvar ? true : false;

	function getAxis(axis){
		let retAxis = {};

		retAxis.type = axis.tag;
		retAxis.default = axis.defaultValue;
		retAxis.min = axis.minValue;
		retAxis.max = axis.maxValue;

		return retAxis;
	}
	
	/* ToDo slant */
	var wd = false, wg = false, sl = false;

	if(fontData.isVariable){
		fontData.axes = [];
		for(let i = 0; i < font.tables.fvar.axes.length; i++){
			fontData.axes = fontData.axes.concat(getAxis(font.tables.fvar.axes[i]));
			switch (font.tables.fvar.axes[i].tag){
				case 'wght':
					wg = true; break;
				case 'wdth':
					wd = true; break;
			} 
		}
	}
	
	if (font.names.preferredSubfamily) fontData.styleName = font.names.preferredSubfamily.en;
	else fontData.styleName = font.names.fontSubfamily.en;
	
	if (!wg) { /* Fixed fonts */
		fontData.weightClass = font.tables.os2.usWeightClass;

		if (macStyle[0] && fsSelection[5])		fontData.weight = 'Bold'; 
		else if (macStyle[0] || fsSelection[5]){
			fontData.weight = 'Bold';
			warnings = warnings.concat('weig');
		}
		else fontData.weight = 'Regular';
	}
	
	fontData.slantType = macStyle[1] + fsSelection[0];

	if (macStyle[1] && fsSelection[0])		fontData.slantType = 'Italic'; 
	else if (macStyle[1] && fsSelection[9])		fontData.slantType = 'Oblique'; 
	else if (macStyle[1] || fsSelection[0] || fsSelection[9]){
		fontData.slantType = 'Italic';
		warnings = warnings.concat('slnt');
	}
	else fontData.slantType = 'Roman';
	
	if (!wd){
		if (macStyle[5]) fontData.width = 'Condensed';
		else if (macStyle[6]) fontData.width = 'Expanded';
		else fontData.width = 'Normal';

		fontData.widthClass = font.tables.os2.usWidthClass;
	}


	if(font.tables.head.lowestRecPPEM) fontData.minSize = font.tables.head.lowestRecPPEM;

	fontData.unicodeRange = NumToBoolArray(font.tables.os2.ulUnicodeRange1);
	fontData.glyphNum = font.numGlyphs;

	/* Measurements */
	let height = (font.ascender - font.descender);

	fontData.topBound = font.ascender / height;
	fontData.bottomBound = -font.descender / height;
	fontData.baseline = -font.descender / height;
	/* Ascender */
	fontData.ascender = propertyOrGlyphSize(font.tables.os2.sTypoAscender, "ascH", 'h', 'yMax', font.ascender) / height;
	/* Descender */
	fontData.descender = -propertyOrGlyphSize(font.tables.os2.sTypoDescender, "desH", 'p', 'yMin', font.descender) / height;
	/* Cap Height */
	fontData.capHeight = propertyOrGlyphSize(font.tables.os2.sCapHeight, "capH", 'H', 'yMax') / height;
	/* x Height */
	fontData.xHeight = propertyOrGlyphSize(font.tables.os2.sxHeight, "xHei", 'x', 'yMax') / height;

	fontData.strikeout = font.tables.os2.yStrikeoutPosition / height;
	fontData.underline = -font.tables.post.underlinePosition / height;
	
	fontData.avgWidth = font.tables.os2.xAvgCharWidth / height;
	fontData.mWidth = font.unitsPerEm / height;
	fontData.nWidth = (getCharSize('n', font).xMax - getCharSize('n', font).xMin) / height;
	fontData.iWidth = (getCharSize('i', font).xMax - getCharSize('i', font).xMin) / height;
	fontData.oWidth = (getCharSize('o', font).xMax - getCharSize('o', font).xMin) / height;

	/* Gap */
	if(font.tables.os2.sTypoLineGap != 0){
		fontData.gap = font.tables.os2.sTypoLineGap / height;
	}
	else {
		fontData.gap = 1 - (fontData.ascender + fontData.descender);
		warnings = warnings.concat('gap');
	}
	
	return {fontData, errors, warnings};
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

	function LoopArray(arr){
		if (arr.length == 0) return;

		switch (arr[0].constructor){
			case Object:
				for(i in arr){
					text += "<li>";
					LoopObject(arr[i]);
					text += "</li>";
				}
				break;
			case Array:
				for(i in arr){
					text += "<li>";
					LoopArray(arr[i]);
					text += "</li>";
				}
				break;
			default:
				for(i in arr){
					text += `<li>${arr[i]}</li>`;
				}
				break;
			}
	}

	function LoopObject(obj){
		let objs = [];
		let props = [];
		let arrs = [];

		for (const key in obj)
		{
			if(obj[key].constructor == Object){
				objs = objs.concat(key);
			}
			else if (obj[key].constructor == Array){
				arrs = arrs.concat(key);
			}
			else {
				props = props.concat(key);
			}
		}

		text += `<ul>`;
		for(const i in props){
			text += `<li><b>${camelToDisplay(props[i])}:</b>${obj[props[i]]}</li>`;
		}

		for(const i in arrs){
			text += `<li><b>${camelToDisplay(arrs[i])}:</b><ol>`;
			LoopArray(obj[arrs[i]]);
			text += `</ol></li>`
		}
		
		for(const i in objs){
			h++;
			text += `<li><h${h}>${camelToDisplay(objs[i])}</h${h}></li>`;
			LoopObject(obj[objs[i]]);
			h--;
		}
		text += `</ul>`;
	}
	
	text += "</p>";
	return text;
}

/**
 * Returns size info of a character
 * @param {string} char Glyph character
 * @param {Object} font Font to get glyph
 * @returns \{ xMax, xMin, yMax, yMin }
 */
function getCharSize(char, font){
	var ucode = char.charCodeAt(0);
	var charInfo = font.glyphs.glyphs[0];

	for(i in font.glyphs.glyphs){

		if (font.glyphs.glyphs[i].unicode == ucode){
			charInfo = font.glyphs.glyphs[i];
		}
	}
	
	var ret = {};
	ret.xMax = charInfo.xMax;
	ret.xMin = charInfo.xMin;
	ret.yMax = charInfo.yMax;
	ret.yMin = charInfo.yMin;

	return ret;
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

	if(clas) div.classList.add(clas);
}

/**
 * Transform a number into a **bool array** representation of a _bit array_. Optionally pads with 0's
 * @param {number} num Number to convert
 * @param {number} places Number of places to pad with 0
 * @returns Array of strings
 */
function NumToBoolArray(num, places){
	let numToStr = num.toString(2);
	
	let arr = [];

	for(digit in numToStr){
		if (numToStr[digit] == 1)
			arr = arr.concat(true);
		else arr = arr.concat(false);
	}
	
	/* Pad with 0's */
	if (places){
		while(arr.length < places){
			arr = arr.concat(false);
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

function prettifyJSON(str){
	function newline(){
		if (result[result.length - 1] == '\n') {
			return;
		}

		result += '\n';
		for (let i = 0; i < level; i++) {
			result += '\t';
		}
	}

	let level = 0;
	let result = "";
	for(let i = 0; i < str.length; i++){
		if (str[i] == '{' || str[i] == '['){
			level++;
			result += str[i];
			newline();
		}
		else if (str[i] == '}' || str[i] == ']'){
			level--;
			newline();
			result += str[i];
		}
		else if (str[i] == ',' ||
		(str[i - 1] == '"' && str[i] == ':' && (str[i + 1] == '{' || str[i + 1] == '['))){
			result += str[i];
			newline();
		}
		else{
			result += str[i];
		}
	}
	
	return result;
}

/**
 * Sets a download button for an object as a JSON file.
 * Set _button_ param to _false_ to automatically download.
 * @param {Object} obj Object to convert to JSON
 * @param {String} name Name of file, no extension
 * @param {Element} button _(optional)_ Download link or button
 * @param {Boolean} prettify Format with line breaks and indentations.
 */
function saveObjectAsJSON(obj, name, button, prettify){
	//Create data
	let rawStr = JSON.stringify(obj);
	if (prettify) rawStr = prettifyJSON(rawStr);

	let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(rawStr);

	let docLink = null;
	//Atach data to link
	if (button == null || button == undefined) docLink = document.createElement('a');
	else docLink = button;

	docLink.setAttribute("href", dataStr);
	docLink.setAttribute('download', name + '.json');
	
	if (button == null || button == undefined) {
		document.body.appendChild(docLink);
		//Automatically download
		docLink.click();
		document.body.removeChild(docLink);
	}
}